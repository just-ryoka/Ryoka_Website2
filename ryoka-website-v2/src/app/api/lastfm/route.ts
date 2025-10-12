import { NextResponse } from 'next/server';

const LASTFM_API_KEY = process.env.LASTFM_API_KEY;
const LASTFM_USERNAME = process.env.LASTFM_USERNAME || 'TheRyoka';

export async function GET() {
    // Если нет API ключа - возвращаем 200 с isPlaying: false
    if (!LASTFM_API_KEY) {
        console.log('[Last.fm] API key not found');
        return NextResponse.json({ isPlaying: false }, { status: 200 });
    }

    try {
        const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&limit=1`;

        const response = await fetch(url, {
            next: { revalidate: 10 },
            headers: {
                'User-Agent': 'NextJS-LastFM-Player/1.0'
            }
        });

        if (!response.ok) {
            console.error('[Last.fm] API response not ok:', response.status);
            return NextResponse.json({ isPlaying: false }, { status: 200 });
        }

        const data = await response.json();

        // Проверка на ошибки от Last.fm API
        if (data.error) {
            console.error('[Last.fm] API error:', data.error, data.message);
            return NextResponse.json({ isPlaying: false }, { status: 200 });
        }

        const track = data.recenttracks?.track?.[0];

        if (!track) {
            console.log('[Last.fm] No tracks found');
            return NextResponse.json({ isPlaying: false }, { status: 200 });
        }

        const isPlaying = track['@attr']?.nowplaying === 'true';

        if (isPlaying) {
            console.log('[Last.fm] Now playing:', track.name, 'by', track.artist['#text'] || track.artist);
        }

        return NextResponse.json({
            isPlaying,
            title: track.name,
            artist: track.artist['#text'] || track.artist,
            album: track.album['#text'],
            image: track.image?.[3]?.['#text'] || track.image?.[2]?.['#text'],
            url: track.url,
        }, { status: 200 });

    } catch (err) {
        // Тихо возвращаем isPlaying: false при любой ошибке
        console.error('[Last.fm] Unexpected error:', err);
        return NextResponse.json({ isPlaying: false }, { status: 200 });
    }
}
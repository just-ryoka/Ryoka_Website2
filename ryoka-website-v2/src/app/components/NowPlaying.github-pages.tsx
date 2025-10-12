// Альтернативна версія NowPlaying для GitHub Pages
// Замініть вміст src/app/components/NowPlaying.tsx на цей код
// якщо хочете використати пряме підключення до Last.fm API

'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Track {
    isPlaying: boolean;
    title?: string;
    artist?: string;
    album?: string;
    image?: string;
    url?: string;
}

export default function NowPlaying() {
    const [track, setTrack] = useState<Track>({ isPlaying: false });
    const [mounted, setMounted] = useState(false);
    const [visible, setVisible] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const [error, setError] = useState(false);

    // ⚠️ ВАЖЛИВО: Замініть на ваші дані
    const LASTFM_API_KEY = 'YOUR_LASTFM_API_KEY'; // Отримайте на https://www.last.fm/api/account/create
    const LASTFM_USERNAME = 'just-ryoka'; // Ваш Last.fm username

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const fetchNowPlaying = async () => {
            // Якщо немає API ключа - не показуємо компонент
            if (!LASTFM_API_KEY || LASTFM_API_KEY === 'YOUR_LASTFM_API_KEY') {
                return;
            }

            try {
                const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&limit=1`;

                const res = await fetch(url, {
                    cache: 'no-store'
                });

                if (!res.ok) {
                    setError(true);
                    return;
                }

                const data = await res.json();

                if (data.error) {
                    setError(true);
                    return;
                }

                const trackData = data.recenttracks?.track?.[0];

                if (!trackData) {
                    setVisible(false);
                    setTrack({ isPlaying: false });
                    return;
                }

                const isPlaying = trackData['@attr']?.nowplaying === 'true';

                if (isPlaying) {
                    const image = trackData.image?.[3]?.['#text'] || trackData.image?.[2]?.['#text'];
                    
                    if (image && image !== currentImage) {
                        setImageLoaded(false);
                        setCurrentImage(image);
                    }

                    setTrack({
                        isPlaying: true,
                        title: trackData.name,
                        artist: trackData.artist['#text'] || trackData.artist,
                        album: trackData.album['#text'],
                        image,
                        url: trackData.url,
                    });
                    setError(false);
                    setTimeout(() => setVisible(true), 300);
                } else {
                    setVisible(false);
                    setTrack({ isPlaying: false });
                }
            } catch (error) {
                console.error('Error fetching track:', error);
                setError(true);
            }
        };

        fetchNowPlaying();
        const interval = setInterval(fetchNowPlaying, 10000);

        return () => clearInterval(interval);
    }, [mounted, currentImage, LASTFM_API_KEY, LASTFM_USERNAME]);

    if (!mounted || !track.isPlaying || error) {
        return null;
    }

    const title = track.title || 'Unknown title';
    const artist = track.artist || 'Unknown artist';

    const innerContent = (
        <>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-[1500ms] animate-tilt"></div>

            <div className="relative bg-black/40 backdrop-blur-2xl rounded-xl p-5 shadow-2xl border border-white/20 hover:border-white/40 hover:bg-black/50 transition-all duration-[1200ms]">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10 backdrop-blur-xl rounded-xl"></div>

                <div className="relative flex items-center gap-4">
                    <div className="relative flex-shrink-0">
                        <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-[1200ms]"></div>
                        <div className="relative w-16 h-16 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl">
                            {currentImage && (
                                <Image
                                    key={currentImage}
                                    src={currentImage}
                                    alt={track.album || 'Album cover'}
                                    width={64}
                                    height={64}
                                    className={`absolute inset-0 w-full h-full rounded-xl shadow-2xl ring-2 ring-white/30 object-cover transition-opacity duration-[1000ms] ease-out ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                                    onLoad={() => setImageLoaded(true)}
                                    unoptimized
                                />
                            )}
                        </div>
                    </div>

                    <div className="flex-1 min-w-0">
                        <h3 className="text-white font-bold text-base truncate drop-shadow-2xl transition-all duration-700 group-hover:text-purple-200">
                            {title}
                        </h3>
                        <p className="text-gray-200 text-sm truncate drop-shadow-lg transition-all duration-700 group-hover:text-pink-200">
                            {artist}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );

    const wrapperClass = `w-full max-w-md group relative transition-all duration-[2000ms] ease-out ${
        visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
    }`;

    if (track.url) {
        return (
            <a href={track.url} target="_blank" rel="noopener noreferrer" className={wrapperClass}>
                {innerContent}
            </a>
        );
    }

    return <div className={wrapperClass}>{innerContent}</div>;
}

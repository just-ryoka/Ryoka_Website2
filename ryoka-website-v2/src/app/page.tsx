import './style/background.css';
import './style/main.css';
import { socialLinks } from './lib/socialLinks';
import NowPlaying from './components/NowPlaying';
import Avatar from './components/Avatar';
import MouseGlow from './components/MouseGlow';

export default function Home() {
    const [discord, telegram, spotify, github] = socialLinks;

    return (
        <div className="relative min-h-screen">
            <MouseGlow />
            
            {/* Background video visible on all screen sizes */}
            <section className="fixed inset-0 -z-10">
                <video
                    id="background-video"
                    poster="/file.svg"
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-hidden="true"
                    className="w-full h-full object-cover"
                >
                    <source src="/large.mp4" type="video/mp4" />
                    Your browser doesn&apos;t support video
                </video>
            </section>

            <section className="flex flex-col justify-center items-center min-h-screen w-full px-4 py-8">
                <div className="flex flex-col items-center space-y-6 sm:space-y-8 w-full max-w-3xl">
                    <Avatar />

                    <div className="text-center space-y-4 animate-fade-in-up delay-200">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold drop-shadow-2xl font-comfortaa bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent animate-gradient">
                            The Ryoka
                        </h1>

                        <div className="relative group inline-block">
                            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-all duration-1000 animate-pulse-slow"></div>
                            <div className="relative">
                                <div className="flex items-center justify-center gap-3 px-8 py-3 bg-black/40 backdrop-blur-2xl rounded-xl border border-white/20 shadow-2xl transition-all duration-700 group-hover:border-white/30 group-hover:bg-black/50">
                                    <div className="h-px w-6 bg-gradient-to-r from-transparent via-purple-400 to-transparent transition-all duration-700"></div>
                                    <p className="text-xs sm:text-sm text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text font-medium tracking-[0.35em] animate-gradient">
                                        DEVELOPER • CREATOR
                                    </p>
                                    <div className="h-px w-6 bg-gradient-to-r from-transparent via-blue-400 to-transparent transition-all duration-700"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row gap-6 flex-wrap justify-center animate-fade-in-up delay-400">
                        <a
                                href={discord.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={discord.name || 'Open Discord'}
                                className="relative group transform transition-all duration-700 ease-out hover:scale-110 hover:-translate-y-2"
                            >
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-md opacity-75 group-hover:opacity-100 group-hover:blur-lg transition-all duration-700"></div>
                            <div className="relative bg-black/40 backdrop-blur-2xl p-4 rounded-xl border border-white/20 group-hover:border-white/40 group-hover:bg-black/50 transition-all duration-700 shadow-xl">
                                <discord.Icon size={36} color={discord.color} className="drop-shadow-2xl transition-all duration-700 group-hover:rotate-12 group-hover:scale-110" />
                            </div>
                        </a>

                        <a
                            href={telegram.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={telegram.name || 'Open Telegram'}
                            className="relative group transform transition-all duration-700 ease-out hover:scale-110 hover:-translate-y-2"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur-md opacity-75 group-hover:opacity-100 group-hover:blur-lg transition-all duration-700"></div>
                            <div className="relative bg-black/40 backdrop-blur-2xl p-4 rounded-xl border border-white/20 group-hover:border-white/40 group-hover:bg-black/50 transition-all duration-700 shadow-xl">
                                <telegram.Icon size={36} color={telegram.color} className="drop-shadow-2xl transition-all duration-700 group-hover:rotate-12 group-hover:scale-110" />
                            </div>
                        </a>

                        <a
                            href={spotify.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={spotify.name || 'Open Spotify'}
                            className="relative group transform transition-all duration-700 ease-out hover:scale-110 hover:-translate-y-2"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur-md opacity-75 group-hover:opacity-100 group-hover:blur-lg transition-all duration-700"></div>
                            <div className="relative bg-black/40 backdrop-blur-2xl p-4 rounded-xl border border-white/20 group-hover:border-white/40 group-hover:bg-black/50 transition-all duration-700 shadow-xl">
                                <spotify.Icon size={36} color={spotify.color} className="drop-shadow-2xl transition-all duration-700 group-hover:rotate-12 group-hover:scale-110" />
                            </div>
                        </a>

                        <a
                            href={github.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={github.name || 'Open GitHub'}
                            className="relative group transform transition-all duration-700 ease-out hover:scale-110 hover:-translate-y-2"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur-md opacity-75 group-hover:opacity-100 group-hover:blur-lg transition-all duration-700"></div>
                            <div className="relative bg-black/40 backdrop-blur-2xl p-4 rounded-xl border border-white/20 group-hover:border-white/40 group-hover:bg-black/50 transition-all duration-700 shadow-xl">
                                <github.Icon size={36} color={github.color} className="drop-shadow-2xl transition-all duration-700 group-hover:rotate-12 group-hover:scale-110" />
                            </div>
                        </a>
                    </div>

                    <NowPlaying />
                </div>
            </section>
        </div>
    );
}
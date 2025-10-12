'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Avatar() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Небольшая задержка для плавной анимации
        const timer = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`relative transition-all duration-1000 ease-out ${loaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur-xl opacity-75 animate-tilt"></div>
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden">
                <Image
                    className="relative rounded-full w-full h-full shadow-2xl ring-2 ring-white/30 transition-all duration-1000 ease-out object-cover"
                    src="https://github.com/just-ryoka.png"
                    alt="Ryoka - Developer Avatar"
                    width={144}
                    height={144}
                    priority
                    quality={95}
                    unoptimized
                />
            </div>
        </div>
    );
}
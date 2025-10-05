'use client'

import { useEffect, useState } from 'react';

interface TypeWriterProps {
    texts: string[];
    username?: string;
    typingSpeed?: number;
    deletingSpeed?: number;
    delayBetweenTexts?: number;
}

export default function TypeWriter({
                                       texts,
                                       username = '@Justryoka',
                                       typingSpeed = 150,
                                       deletingSpeed = 100,
                                       delayBetweenTexts = 2000
                                   }: TypeWriterProps) {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[currentIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Печатание
                if (displayText.length < currentText.length) {
                    setDisplayText(currentText.slice(0, displayText.length + 1));
                } else {
                    // Пауза перед стиранием
                    setTimeout(() => setIsDeleting(true), delayBetweenTexts);
                }
            } else {
                // Стирание
                if (displayText.length > 0) {
                    setDisplayText(currentText.slice(0, displayText.length - 1));
                } else {
                    // Переход к следующему тексту
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentIndex, texts, typingSpeed, deletingSpeed, delayBetweenTexts]);

    return (
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
            {displayText}
            <span className="text-white">{username}</span>
            <span className="animate-pulse ml-1">|</span>
        </h1>
    );
}
'use client'

import { useEffect } from 'react'

export default function ErrorSuppressor() {
    useEffect(() => {
        // Только в режиме разработки
        if (process.env.NODE_ENV !== 'development') return

        const originalError = console.error

        console.error = (...args: unknown[]) => {
            const errorString = args.join(' ')

            // Список паттернов ошибок от расширений, которые нужно скрыть
            const extensionErrorPatterns = [
                'chrome-extension://',
                'navigator.getBattery',
                'Could not establish connection',
                'Receiving end does not exist',
                'Extension context invalidated'
            ]

            // Проверяем, содержит ли ошибка паттерны расширений
            const isExtensionError = extensionErrorPatterns.some(pattern =>
                errorString.includes(pattern)
            )

            // Если это НЕ ошибка расширения - показываем её
            if (!isExtensionError) {
                originalError(...args)
            }
        }

        return () => {
            console.error = originalError
        }
    }, [])

    return null
}
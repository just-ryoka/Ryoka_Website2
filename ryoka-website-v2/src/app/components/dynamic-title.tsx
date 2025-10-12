'use client'

import { useEffect } from 'react';

export default function DynamicTitle() {
    useEffect(() => {
        const prefix = '@';
        const text = 'ryoka';
        let index = 0;
        let isDeleting = false;

        const typeTitle = () => {
            if (!isDeleting) {
                if (index <= text.length) {
                    document.title = prefix + text.slice(0, index);
                    index++;
                    setTimeout(typeTitle, 200);
                } else {
                    setTimeout(() => {
                        isDeleting = true;
                        typeTitle();
                    }, 2000);
                }
            } else {
                if (index > 0) {
                    index--;
                    document.title = prefix + text.slice(0, index);
                    setTimeout(typeTitle, 100);
                } else {
                    isDeleting = false;
                    setTimeout(typeTitle, 500);
                }
            }
        };

        typeTitle();

        return () => {
            document.title = '@ryoka';
        };
    }, []);

    return null;
}
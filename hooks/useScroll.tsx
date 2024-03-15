// hooks/useScroll.tsx
'use client'
import { useEffect, useState } from 'react';

export const useScroll = () => {
    const [visibleSections, setVisibleSections] = useState<string[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.section');
            const visible: string[] = [];

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    visible.push(section.id);
                }
            });

            setVisibleSections(visible);
        };

        handleScroll(); // Initial check
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return visibleSections;
};

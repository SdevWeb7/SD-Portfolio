"use client";

import { useEffect, useState } from "react";

export const useScrollY = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isScrollingDown, setIsScrollingDown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrollingDown(currentScrollY > scrollY);
            setScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollY]);

    return {scrollY, isScrollingDown};
}
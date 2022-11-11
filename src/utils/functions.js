import { useState, useEffect } from 'react';

export const getWidth = () => {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
};

export const getHeight = () => {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
    );
};

export const useOnScreen = (ref) => {
    const [isIntersecting, setIntersecting] = useState(false);

    const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting),
        {
            rootMargin: '0px',
            threshold: 0.5,
        }
    );

    useEffect(() => {
        observer.observe(ref.current);
        // Remove the observer as soon as the component is unmounted
        return () => {
            observer.disconnect();
        };
    }, []);

    return isIntersecting;
};

export const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    useEffect(() => {
        const updateMousePosition = (ev) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);
    return mousePosition;
};

import { useEffect, useRef, useState } from 'react';

export default function useScroll(
    scrollableElRef,
    triggerRef,
    onTriggerCallback
) {
    const observer = useRef(null);

    const [options] = useState(
        {
            root: scrollableElRef.current,
            rootMargin: '0px',
            threshold: 0
        },
        []
    );

    const currentTrigger = triggerRef.current;

    useEffect(() => {
        if (!currentTrigger) return;

        observer.current = new IntersectionObserver(([target]) => {
            if (target.isIntersecting) onTriggerCallback();
        }, options);

        observer.current.observe(currentTrigger);

        return function () {
            observer.current.unobserve(currentTrigger);
        };
    }, [onTriggerCallback, currentTrigger, scrollableElRef, options]);
}

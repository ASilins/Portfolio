import { useEffect, useRef, useState } from 'react';


const useIntersection = (options) => {
    const ref = useRef(null);
    const [observed, setObserved] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setObserved(true);
                    observer.disconnect();
                }
            });
        }, options);

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [options]);

    return [ref, observed];
};

export default useIntersection;
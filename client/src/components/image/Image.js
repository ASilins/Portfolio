import { useRef, useState } from 'react';
import { useOnScroll } from '../../hooks/useOnScroll';
import "./Image.css"

export const Image = ({
    src = '',
    alt = '',
    height,
    children,
    fixed = false,
    speed = 1,
    clamp = false,
    debug = false,
}) => {
    const box = useRef(null);
    const img = useRef(null);
    const [ΔY, setΔY] = useState(0);

    useOnScroll((scrollY, winHeight) => {
        if (fixed) return;
        if (!box.current) return;
        if (!img.current) return;

        const boxRect = box.current.getBoundingClientRect();

        const winBottom = scrollY + winHeight;
        const boxTop = boxRect.top + scrollY;
        const boxBottom = boxRect.bottom + scrollY;
        const boxHeight = boxRect.height;
        const pct = (clampVal(winBottom, boxTop, boxBottom + winHeight) - boxTop) / (boxHeight + winHeight);

        const imgHeight = img.current.offsetHeight;

        if (imgHeight < boxHeight) {
            console.warn(
                `parallax effect doesn't work if image is smaller than the bounding box. imgHeight=${imgHeight} boxHeight=${boxHeight}`,
            );
            return;
        }

        const diff = imgHeight - boxHeight;
        const deltaY =
            // starting offset
            (0 - diff - diff * speed) * 0.5 +
            // distance travelled to reach end
            diff * pct * speed;

        if (clamp) {
            setΔY(clampVal(deltaY, -diff, 0));

        } else {
            setΔY(deltaY);
        }
    });



    return (
        <div ref={box} className="image-box" style={{ height: height || undefined }}>
            {fixed ? (
                <div
                    className="image-bg dark-overlay"
                    style={{ backgroundImage: `url(${src})`, height: height || undefined }}
                />
            ) : (
                <img
                    ref={img}
                    className="image-behind"
                    src={src}
                    alt={alt}
                    style={{
                        transform: `translate(0, ${ΔY}px)`,
                    }}
                />
            )}
            {Boolean(children) && <div className="image-content">{children}</div>}
        </div>
    );
};

const clampVal = (num = 0, min = 0, max = 0) => {
    return Math.max(min, Math.min(num, max));
};
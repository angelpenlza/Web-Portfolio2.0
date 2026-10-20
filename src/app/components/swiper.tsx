import { useCallback, useEffect, useRef, useState } from "react"

export default function Swiper({ children, onSwipe }: {
  children: React.ReactNode,
  onSwipe: Function,
}) {
  const wrapperRef= useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  const handleTouchStart = useCallback((e: any) => {
    if(wrapperRef && wrapperRef.current?.contains(e.target)) return;

    e.preventDefault();

    setStartX(e.touches[0].clientX);
    setStartY(e.touches[0].clientY);
  }, []);

  const handleTouchEnd = useCallback((e: any) => {
    if(wrapperRef && wrapperRef.current?.contains(e.target)) return;

    e.preventDefault();

    const deltaX = e.changedTouches[0].clientX - startX;
    const deltaY = e.changedTouches[0].clientY - startY;

    onSwipe({ deltaX, deltaY });
    
  }, [startX, startY, onSwipe])

  useEffect(() => {
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    }
  }, [handleTouchStart, handleTouchEnd])

  return <div ref={wrapperRef}>{children}</div>
}
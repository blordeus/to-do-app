import { useEffect, useState } from "react"

export const StatusBar = () => {
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 700) setIsMobileView(true);
            else setIsMobileView(false);
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () =>
    }, [])
  return (
    <div>StatusBar</div>
  )
}

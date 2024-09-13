import { useEffect, useState } from "react"

export default function BackToTop() {
    const [hasScrolled, setHasScrolled] = useState("false")

    useEffect(() => {
        window.addEventListener("scroll", onScroll)
        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    })

    const onScroll = () => {
        if (window.scrollY > 100 && !hasScrolled) {
            setHasScrolled(true)
        } else if (window.scrollY < 100 && hasScrolled) {
            setHasScrolled(false)
        }
    }

    return (
        <>
            {hasScrolled && (
                <a className="scroll-top scroll-to-target open" href="#top">
                    <i className="fas fa-level-up-alt" />
                </a>

            )}
        </>
    )
}
import { useEffect, useState } from 'react'
import CountUp from "../elements/CountUp"
export default function Counter3() {
    const [inViewport, setInViewport] = useState(false)

    const handleScroll = () => {
        const elements = document.getElementsByClassName('count')
        if (elements.length > 0) {
            const element = elements[0]
            const rect = element.getBoundingClientRect()
            const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight
            if (isInViewport && !inViewport) {
                setInViewport(true)
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <>
            <div className="counter-area-three">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="counter-item-three">
                                <div className="counter-content">
                                    {inViewport && <CountUp end={1500} duration={10} />}
                                    <p>Project Complete</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="counter-item-three">
                                <div className="counter-content">
                                    {inViewport && <CountUp end={8562} duration={10} />}
                                    <p>Satisfied Clients</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="counter-item-three">
                                <div className="counter-content">
                                    {inViewport && <CountUp end={450} duration={10} />}
                                    <p>Experienced Staff</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="counter-item-three">
                                <div className="counter-content">
                                    {inViewport && <CountUp end={38} duration={10} />}
                                    <p>Awards Win</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

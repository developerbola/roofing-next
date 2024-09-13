import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "../../node_modules/react-modal-video/css/modal-video.css"

export default function VideoPopup() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <a onClick={() => setOpen(true)} className="play-btn popup-video"><i className="fas fa-play" /></a>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="PFkXoK5x5KE" onClose={() => setOpen(false)} />
        </>
    )
}
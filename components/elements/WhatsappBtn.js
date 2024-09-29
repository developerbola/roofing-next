import { useEffect, useState } from "react";

export default function BackToTop() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  const onScroll = () => {
    if (window.scrollY > 100 && !hasScrolled) {
      setHasScrolled(true);
    } else if (window.scrollY < 100 && hasScrolled) {
      setHasScrolled(false);
    }
  };

  return (
    <>
      <div className={`whatsapp ${hasScrolled.toString()}`}>
        <a href="https://wa.me/79269990761">
          <img
            src="https://png.pngtree.com/png-clipart/20221019/original/pngtree-whatsapp-icon-png-image_8704827.png"
            alt="whatsappicon"
          />
        </a>
      </div>
    </>
  );
}

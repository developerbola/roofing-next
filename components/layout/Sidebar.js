import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  return (
    <>
      <ul className="navigation">
        <li>
          <Link href="/">главный</Link>
        </li>
        <li>
          <Link href="/about">о нас</Link>
        </li>
        <li>
          <Link href="/services">услуги</Link>
        </li>
        <li>
          <Link href="/contact">контакты</Link>
        </li>
      </ul>
    </>
  );
}

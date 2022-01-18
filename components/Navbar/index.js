
import Link from "next/link";
import style from "./Navbar.module.scss";

export default function Navbar () {
    return (
        <div className={style.Navbar}>
            <ul >
                <li>
                <Link href="/">
                <a>HOME</a>
                </Link>
                </li>
                <li>
                <Link href="/gallery">
                <a>GALLERY</a>
                </Link>
                </li>
                <li>
                <Link href="/carosel">
                <a>CAROSEL</a>
                </Link>
                </li>
            </ul>
        </div>


    )
    
}
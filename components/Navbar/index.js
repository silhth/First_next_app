
import Link from "next/link";
import { useState, useEffect } from "react";
import style from "./Navbar.module.scss";
import { useRouter } from 'next/router'

// export default function Navbar () {
//     return (
//         <div className={style.Navbar}>
//             <ul >
//                 <li>
//                 <Link href="/">
//                 <a>HOME</a>
//                 </Link>
//                 </li>
//                 <li>
//                 <Link href="/gallery">
//                 <a>GALLERY</a>
//                 </Link>
//                 </li>
//                 <li>
//                 <Link href="/carosel">
//                 <a>CAROSEL</a>
//                 </Link>
//                 </li>
//                 <li>
//                 <Link href="/blog">
//                 <a>BLOG</a>
//                 </Link>
//                 </li>
//             </ul>
//         </div>


//     )
    
// }

const NavBarElement = [
    { pathname: "/",
    page: 'HOME' },
    { pathname: "/gallery",
    page: 'GALLERY' },
    { pathname: "/carosel",
    page: 'CAROSEL' },
    { pathname: "/blog",
    page: 'BLOG' },
    { pathname: "/particlesTheme",
    page: 'PARTICLES' }

    

]


export default function Navbar () {

    const router = useRouter()


    return (
        <div className={style.Navbar}>
                <div></div>

                {NavBarElement.map((Element, index)=>(
                    
                    <Link href={Element.pathname} key={index}>
                    <button className={router.pathname === Element.pathname ? style.active: ''}>
                    <a>{Element.page}</a>
                    </button>
                    </Link>
                ))}      
                
            
        </div>


    )
    
}
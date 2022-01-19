
import Link from "next/link";
import { useState } from "react";
import style from "./Navbar.module.scss";

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


export default function Navbar () {

    // const [classType, setClassType]= useState('')
    // const CheckActive = () => {
    //     setClassType(style.activeBTN);
    //     console.log(classType)
    // }

    return (
        <div className={style.Navbar}>
                <div></div>
                
                <Link href="/">
                <button >
                <a>HOME</a>
                </button>
                </Link>
                
                
                <Link href="/gallery">
                <button>
                <a>GALLERY</a>
                </button>
                </Link>
                
                
                <Link href="/carosel">
                <button >
                <a>CAROSEL</a>
                </button>
                </Link>
                
               
                <Link href="/blog">
                <button>
                <a>BLOG</a>
                </button>
                </Link>
               
                
            
        </div>


    )
    
}
import Link from "next/link"
import React, { useEffect, useState } from "react"
import s from "./header.module.sass"

export const Header: React.FC<{}> = () => {
    const [isHeaderVisible, setHeaderVisible] = useState(true)
    const [scrollPosition, setScrollPosition] = useState(0)
    useEffect(() => {
        setScrollPosition(window.scrollY)
        const scrollHandler = (e: Event) => {
            setScrollPosition(window.scrollY)
            //window.removeEventListener("scrol", scrollHandler)
            if (window.scrollY < scrollPosition || window.scrollY <= 0) {
                setHeaderVisible(true)
            } else {
                setHeaderVisible(false)
            }
            // setTimeout(() => {
            //     window.addEventListener("scroll", scrollHandler)
            // }, 300)
        }
        window.addEventListener("scroll", scrollHandler)
        return window.removeEventListener("scrol", scrollHandler)
    }, [scrollPosition])

    return (
        <div className={`${s.header} ${isHeaderVisible || s.hidden}`}>
            <div className={s.container}>
                <div className={s.logo}>
                    <Link href="/"><a>
                        <img src={"https://placehold.jp/320x96.png?text=LOGO"} className={s.img}/>
                    </a></Link>
                </div>
            </div>
        </div>
    )
}
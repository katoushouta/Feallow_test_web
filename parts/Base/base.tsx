import { useEffect, useRef, useState } from "react"
import { Footer } from "../Footer/footer"
import { Header } from "../Header/header"
import s from "./base.module.sass"

export const Base: React.FC<{}> = (props) => {
    const ref = useRef<HTMLDivElement>(null)
    const [isScroll, setScroll] = useState(false)
    useEffect(() => {
        if(ref.current && window) {
            console.log("w", window.outerHeight)
            console.log("d", ref.current.scrollHeight)
            if (ref.current.scrollHeight > window.outerHeight) {
                setScroll(true)
            }
        }
    }, [ref])
    return (
        <>
            <Header isTop={!isScroll}/>
            <div className={s.main} ref={ref}>
                {props.children}
            </div>
            <Footer />
        </>
    )
}
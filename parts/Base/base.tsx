import { useEffect, useRef, useState } from "react"
import { Footer } from "../Footer/footer"
import { Header } from "../Header/header"
import s from "./base.module.sass"

export const Base: React.FC<{}> = (props) => {
    return (
        <div className={s.wrap} id="base">
            <div className={s.header}><Header /></div>
            <div className={s.main} >
                {props.children}
            </div>
            <div className={s.footer}><Footer /></div>
        </div>
    )
}
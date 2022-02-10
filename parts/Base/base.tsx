import { useEffect, useRef, useState } from "react"
import { Footer } from "../Footer/footer"
import { Header } from "../Header/header"
import s from "./base.module.sass"

export const Base: React.FC<{}> = (props) => {
    return (
        <>
            <Header />
            <div className={s.main} >
                {props.children}
            </div>
            <Footer />
        </>
    )
}
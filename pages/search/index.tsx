import Link from "next/link"
import { useRouter } from "next/router"
import { KeyboardEventHandler, useState } from "react"
import { Base } from "../../parts/Base/base"
import s from "../../styles/pages/Search.module.sass"

export const Switcher: React.FC = (props) => {
    const router = useRouter()
    return (
        <div className={s.tab}>
            {router.pathname === "/"
                ? <p className={s.home}>HOME</p>
                : <Link href={"/"}><a>HOME</a></Link>
            }
            {router.pathname.split("/")[1] === "search"
                ? <p className={s.home}>SEARCH</p>
                : <Link href={"/search"}><a>SEARCH</a></Link>
            }
        </div>
    )
}
export const Searcher: React.FC<{isResult?: boolean}> = (props) => {
    const [word, setWord] = useState("")
    const router = useRouter()
    const search = () => {
        if (word !== "") router.push("/search/result?word=" + word)
    }
    const pressKey: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === "Enter") search()
    }
    return (
        <div className={`${s.input} ${props.isResult? s.result: ""}`}>
            <input onChange={(e) => setWord(e.target.value)} onKeyPress={pressKey} placeholder={"type search word"}/>
            <a onClick={search}>🔎</a>
        </div>
    )
}
export const Search = () => {
    return (
        <Base>
            <div className={s.container}>
                <Switcher/>
                <Searcher/>
            </div>
        </Base>
    )
}

export default Search
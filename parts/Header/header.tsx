import Link from "next/link"
import s from "./header.module.sass"

export const Header: React.FC<{}> = () => {
    return (
        <div className={`${s.header}`}>
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
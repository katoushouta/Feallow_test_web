import Link from "next/link";
import { Proto } from "../../api/protocol";
import s from "./title.module.sass"

export const Title: React.FC<Proto.ITitle> = (props) => {
    return (
        <Link href={"/title/" + props.id}><a className={s.title}>
            <img src={props.thumbnailUrl} />
            <p className={s.name}>{props.name}</p>
        </a></Link>
    )
}
import { Proto } from "../../api/protocol";
import s from "./title.module.sass"

export const Title: React.FC<Proto.ITitle> = (props) => {
    return (
        <div className={s.title}>
            <img src={props.thumbnailUrl} />
            <p className={s.name}>{props.name}</p>
        </div>
    )
}
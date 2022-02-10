import s from "./header.module.sass"

export const Header: React.FC<{}> = () => {
    return (
        <div className={`${s.header}`}>
            <div className={s.container}>
                <div className={s.logo}>
                    <img src={"https://placehold.jp/320x96.png?text=LOGO"} />
                </div>
            </div>
        </div>
    )
}
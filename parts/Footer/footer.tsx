import s from "./footer.module.sass"

export const Footer: React.FC<{}> = () => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <p>フロント研修用試作サイト: Feallow_test</p>
                <p>created by Fazuri</p>
            </div>
        </div>
    )
}
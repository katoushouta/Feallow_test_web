import s from "./footer.module.sass"

export const Footer: React.FC<{}> = () => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <p>フロント研修用試作サイト: Feallow_test</p>
                <p>created by Fazuri</p>
                <a href="http://153.126.185.116:18080/webview/copyright" target={"_blank"} rel={"noopener noreferrer"}>著作権</a>
            </div>
        </div>
    )
}
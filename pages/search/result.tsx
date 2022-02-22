import { GetServerSideProps } from "next"
import { Searcher, Switcher } from "."
import { Proto } from "../../api/protocol"
import { makeDummyTitle } from "../../mock/model/title"
import { Base } from "../../parts/Base/base"
import { Title } from "../../parts/title/title"
import s from "../../styles/pages/Search.module.sass"

export const getServerSideProps: GetServerSideProps = async (context) => {
    const word = context.query.word as string?? ""
    const apiData: Proto.SearchView = {titles: [1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(id => makeDummyTitle(id))}
    return {
        props: {
            data: apiData,
            word
        }
    }
}
export const Search = (props: {
    data: Proto.SearchView
    word: string
}) => {
    return (
        <Base>
            <div className={s.container}>
                <Switcher/>
                <Searcher isResult={true}/>
                <h1 className={s.word}>{props.word}</h1>
                <div className={s.titles}>
                    {props.data?.titles?.map(t => (
                        <Title {...t}/>
                    ))}
                </div>
            </div>
        </Base>
    )
}

export default Search
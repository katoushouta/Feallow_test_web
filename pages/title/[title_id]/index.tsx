import { GetStaticPaths, GetStaticProps } from "next"
import Link from "next/link"
import { Proto } from "../../../api/protocol"
import { makeDummyDetailView } from "../../../mock/view/detail"
import { Base } from "../../../parts/Base/base"
import s from '../../../styles/pages/Detail.module.sass'

export const getStaticProps: GetStaticProps = async (context) => {
    const titleId = context.params.title_id as string
    const apiData = makeDummyDetailView(Number(titleId))
    return {
        props: {
            data: apiData,
            error: null,
            titleId
        }
    }
}
export const getStaticPaths: GetStaticPaths = async () => {
    return {
        fallback: true,
        paths: []
    }
}
export default function TitleDetail(props:{
    data: Proto.TitleDetailView
    titleId: number
}) {
    return (
        <Base>
            <div className={s.top}>
                <img src={props.data?.title?.thumbnailUrl}/>
                <p className={s.titleName}>{props.data?.title?.name}</p>
                <p className={s.description}>{props.data?.title?.description}</p>
            </div>
            <div className={s.chapters}>
                {props.data?.chapters?.map((c, i) => (
                    <Link href={`/title/${props?.titleId}/chapter/${c?.id}`} key={i}><a className={s.chapter}>
                        <img src={c?.thumbnailUrl} />
                        <p>{c?.name}</p>
                    </a></Link>
                ))}
            </div>
        </Base>
    )
}
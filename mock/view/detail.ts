import { Proto } from "../../api/protocol"
import { makeDummyChapter } from "../model/chapter"
import { makeDummyTitle } from "../model/title"
import { dummyHomeView } from "./home"

export const makeDummyDetailView = (id: number): Proto.TitleDetailView => {
    return (
        {
            chapters: [1,2,3,4,5,6,7,8,9].map(v => makeDummyChapter(v)),
            title: makeDummyTitle(id)
        }
    )
}
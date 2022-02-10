import { Proto } from "../../api/protocol";
import { makeDummyTag } from "../model/tag";
import { makeDummyTitle } from "../model/title";

const makeDummyTitlesByTag = (tagId: number): Proto.HomeView.ITitlesByTag => {
    return {
        tag: makeDummyTag(tagId),
        titles: [1,2,3,4,5,6,7,8,9,10].map(v => (
            makeDummyTitle(v)
        ))
    }
}
export const dummyHomeView: Proto.HomeView = {
    titlesByTag: [1,2,3,4].map(v => makeDummyTitlesByTag(v))
}
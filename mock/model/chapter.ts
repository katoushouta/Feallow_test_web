import { Proto } from "../../api/protocol"

export const makeDummyChapter = (id: number): Proto.Chapter => {
    return {
        id: id,
        name: `chapter: ${id}`,
        thumbnailUrl: "https://placehold.jp/540x360.png?text=" + id
    }
}
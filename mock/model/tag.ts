import { Proto } from "../../api/protocol";

export const makeDummyTag = (id: number): Proto.ITag => {
    return {
        id: id,
        name: "tag_" + id
    }
}
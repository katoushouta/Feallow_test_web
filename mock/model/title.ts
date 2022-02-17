import { Proto } from "../../api/protocol";

export const makeDummyTitle = (id: number): Proto.ITitle => {
    return {
        id: id,
        description: "この作品は本が減って掘れるので楽しい、つまり大きいアイコンが特別飛車角落ちでいただけます。",
        name: "Title_" + id,
        thumbnailUrl: "https://placehold.jp/540x360.png?text=" + id
    }
}
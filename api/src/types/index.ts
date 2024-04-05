
export interface ITag {
    id: number;
    name: string;
    alias: string;
    meta: string;
}

type PictureLink = string;
type PictureFile = string;
export type PictureSource = PictureLink | PictureFile;

export interface IPicture {
    id: number;
    title: string;
    type: string;
    source: string;
    meta: string;
    tags: ITag[];
}

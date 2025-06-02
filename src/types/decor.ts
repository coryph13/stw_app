import IPattern from "./pattern";
import IShade from "./shade";
import ITexture from "./texture";

export default interface IDecor {
    slug: string;
    code: string;
    name: string;
    description: string;
    image: string;
    sort: number;
    pattern: IPattern;
    shade: IShade;
    textures: ITexture[];
}

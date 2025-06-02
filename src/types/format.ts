import IUnit from "./unit";

export default interface IFormat {
    slug: string;
    width: number;
    height: number;
    thickness: number;
    unit: IUnit;
}

import IColor from "./color";
import IDecor from "./decor";
import IFormat from "./format";
import IPattern from "./pattern";
import ITexture from "./texture";

// Базовый интерфейс для всех спецификаций
interface IBaseSpec {
    __typename: string;
}

// Общие поля для некоторых спецификаций
interface IDecoratedSpec extends IBaseSpec {
    decor: IDecor;
    texture: ITexture;
    base_material: ISpecValue;
    density: ISpecValue;
    emission_class: ISpecValue;
    moisture_resistance: ISpecValue;
    surface_durability: ISpecValue;
    print_technology: ISpecValue;
    formats: IFormat[];
}

interface IBasicSpec extends IBaseSpec {
    density: ISpecValue;
    emission_class: ISpecValue;
    moisture_resistance: ISpecValue;
    formats: IFormat[];
}

// Конкретные типы спецификаций
interface ITabletopSpec extends IDecoratedSpec {
    __typename: 'TabletopSpec';
}

interface IFlooringSpec extends IDecoratedSpec {
    __typename: 'FlooringSpec';
}

interface ILdspSpec extends IDecoratedSpec {
    __typename: 'LdspSpec';
}

interface ILmdfSpec extends IDecoratedSpec {
    __typename: 'LmdfSpec';
}

interface IDwpSpec extends IBasicSpec {
    __typename: 'DwpSpec';
}

interface IDspSpec extends IBasicSpec {
    __typename: 'DspSpec';
}

interface IHdfSpec extends IBasicSpec {
    __typename: 'HdfSpec';
}

interface IMdfSpec extends IBasicSpec {
    __typename: 'MdfSpec';
}

interface IGlueSpec extends IBaseSpec {
    __typename: 'GlueSpec';
    color: IColor;
    base_material: ISpecValue;
    emission_class: ISpecValue;
    moisture_resistance: ISpecValue;
    viscosity: number;
    open_time: number;
    full_cure_time: number;
    package: string;
}

interface IPaperSpec extends IBaseSpec {
    __typename: 'PaperSpec';
    pattern: IPattern;
    formats: IFormat[];
}

// Union type для всех спецификаций
export type ISpec =
    | ITabletopSpec
    | IFlooringSpec
    | ILdspSpec
    | ILmdfSpec
    | IDwpSpec
    | IDspSpec
    | IHdfSpec
    | IMdfSpec
    | IGlueSpec
    | IPaperSpec;

export interface ISpecValue {
    value: string;
    description: string;
}

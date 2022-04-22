import { Formula } from "./formula";

export interface Racao{

    idRacao: any;
    descricao: string;
    diasValidade: number;
    lstMateriaPrima?: Formula[];

}
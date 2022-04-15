import { MateriaPrima } from "./materiaprima";

export interface Formula{

    idFormula?: any;
    idRacao: any;
    descricaoRacao?: string;
    idMateriaPrima?: any;
    descricaoMateriaPrima?: string;
    quantidade?: number;
    lstMateriaPrima?: Formula[];

}
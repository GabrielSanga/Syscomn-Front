import { RacaoProduzir } from "./racaoProduzir";

export interface OrdemProducao {

    idOrdemProducaoRacao?: any;
    descricao?: string;
    data: Date;
    valorOrdemProducao: number;
    idFuncionario?: any;
    nomeFuncionario?: string;
    status?: number;
    lstRacaoProduzir?: RacaoProduzir[]
    
}
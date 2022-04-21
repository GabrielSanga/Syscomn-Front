import { RacaoProduzir } from "./racaoProduzir";

export interface OrdemProducao {

    idOrdemProducaoRacao?: any;
    descricao?: string;
    data: Date;
    valorOrdemProducao: number;
    IdPessoa?: any;
    nomePessoa?: string;
    status?: number;
    lstRacaoProduzir?: RacaoProduzir[]
    
}
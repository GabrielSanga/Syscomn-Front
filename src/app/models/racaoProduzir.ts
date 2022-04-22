import { LoteProducao } from "./loteProducao";

export interface RacaoProduzir{

    idRacaoProduzir: any;
    idRacao?: number;
    descrRacao?: string;
    idOrdemProducao?: number;
    descrOrdemProducao?: string;
    quantidade: number;
    quantidadeProduzido?: number;
    lstLoteRacao?: LoteProducao[];

}
export interface LoteProducao{

    idLoteProducao: any;
    dataFabricacao?: Date;
    dataValidade?: Date;
    quantidade: number;
    saldo?: number;
    custo?: number;
    unidade?: string;
    idRacaoProduzir: number;
    idLocalArmazenamento: number;
    descrLocalArmazenamento?: string;
    idOrdemProducao?: number;

}
export interface LoteProducao{

    idLoteProducao: any;
    dataFabricacao?: Date;
    dataValidade?: Date;
    quantidade: number;
    saldo?: number;
    unidade?: string;
    custo?: number;
    idRacaoProduzir: number;
    idLocalArmazenamento: number;
    descrLocalArmazenamento?: string;
    idOrdemProducao?: number;

}
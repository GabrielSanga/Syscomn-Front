export interface LoteProducao{

    idLoteRacao: any;
    dataFabricacao?: Date;
    dataValidade?: Date;
    quantidade: number;
    saldo?: number;
    custo?: number;
    unidade?: string;
    idRacaoProduzir: number;
    idRacao?: number;
    descrRacao?: string,
    idLocalArmazenamento: number;
    descrLocalArmazenamento?: string;
    idOrdemProducao?: number;

}
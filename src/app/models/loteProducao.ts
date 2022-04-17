export interface LoteProducao{

    idLoteProducao: any;
    dataFabricacao?: Date;
    dataValidade?: Date;
    saldo?: number;
    unidade?: string;
    custo?: number;
    idRacaoProduzir: number;
    idLocalArmazenamento: number;
    idOrdemProducao?: number;

}
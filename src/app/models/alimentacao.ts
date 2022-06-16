export interface Alimentacao {
    idAlimentacao: any;
    quantidade: number;
    custo?: number;
    idAnimalChip: number;
    idPessoa: number;
    nomePessoa?: string;
    idLoteRacao: number;

    idRacao?: number;
    descrRacao?: string;

    idLote?: any;
    tipoAlimentacao?: string;
}
export interface Alimentacao {
    idAlimentacao: any;
    quantidade: number;
    custo?: number;
    idAnimalChip: number;
    idPessoa: number;
    nomePessoa?: string;

    idLote?: any;
    tipoAlimentacao?: string;
}
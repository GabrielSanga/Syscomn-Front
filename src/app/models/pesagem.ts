export interface Pesagem {
    idPesagem: any;
    data?: Date;
    pesoBrutoVeiculo?: number;
    pesoTaraVeiculo?: number;
    peso: number;
    observacao?: string;
    idAnimalChip: number;
    idPessoa: number;
    nomePessoa?: string;

    idLote?: any;
    tipoPesagem?: string;
}
export interface AnimalChip{
    idAnimalChip: any;
    chip: string;
    codigo: string;
    nome?: string;
    dtaNascimento: Date;
    dtaEntrada: Date;
    dtaSaida?: Date;
    dtaHoraUltimaPesagem?: Date,
    pai?: string;
    mae?: string;
    custoAquisicao: number;
    custoFinal?: number;
    pesoEntrada: number;
    pesoAtual: number;
    motivoSaida?: string;
    status: number;
    ganhoMedioDiario?: number;

    idLote: number;
    nroLote?: number;
    descrLote?: String;

    idSexoAnimal: number;
    descrSexoAnimal?: string;

    idRaca: number;
    descrRaca?: string;

    idEstadoAnimal: number;
    descrEstadoAnimal?: string;

    idTipoMorte?: number;
    descrTipoMorte?: string;
}
import { Pessoa } from "./pessoa";

export interface Fornecedor extends Pessoa{
    idTipoFornecedor: any;
    descricaoTipoFornecedor: string;
    razaoSocial: string;
    nomeFantasia: string;
    inscricaoEstadual: string;
    cnae: string;
    status: string;
}
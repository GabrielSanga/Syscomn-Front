import { Pessoa } from "./pessoa";

export interface Funcionario extends Pessoa{
    dtaAdmissao: Date;
    dtaDemissao: Date;
    NIS: string;
    status: string;
}
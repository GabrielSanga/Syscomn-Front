import { Pessoa } from "./pessoa";

export interface Administrador extends Pessoa{
    dtaAdmissao: Date;
    dtaDemissao: Date;
    status: string;
}
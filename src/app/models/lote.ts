import { Movimentacao } from "./movimentacao";

export interface Lote{
    idLote?: any;
    descricao: string;
    nroLote: Number;
    dataInicio: Date;
    dataFinal: Date;
    pesoEntrada: Number;
    pesoAtual: Number;
    custoLote: Number;
    qtdeCabecasEntrada: Number;
    qtdeCabecasMorte: Number;
    qtdeCabecasAtual: Number;
    statusLote?: any;
    curralPiquete: any;
    descricaoCurralPiquete: String;
    lstMovimentacao?: Movimentacao[];
}
  
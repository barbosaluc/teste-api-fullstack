import { MetodoPagamento } from "./MetodoPagamento";
import { Status } from "./Status";
import { StatusPagamento } from "./StatusPagamento";

export interface PagamentoDTO {
    id: number;
    idPagamento: string;
    cpfCnpj: string;
    numeroCartao: string;
    valorPagamento: number;
    metodoPagamento : MetodoPagamento;
    statusPagamento : StatusPagamento;
    dataPagamento: Date ;
    status: Status;
}


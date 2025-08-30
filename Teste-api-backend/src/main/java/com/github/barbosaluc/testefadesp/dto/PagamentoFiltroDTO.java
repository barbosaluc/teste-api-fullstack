package com.github.barbosaluc.testefadesp.dto;
import com.github.barbosaluc.testefadesp.domain.enums.StatusPagamento;

public record PagamentoFiltroDTO (
    Long idPagamento,
    String cnpjCpf,
    StatusPagamento statusPagamento
) {}

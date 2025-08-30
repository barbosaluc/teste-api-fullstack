package com.github.barbosaluc.testefadesp.persistence.repositories.specification;

import com.github.barbosaluc.testefadesp.domain.entities.PagamentoEntity;
import com.github.barbosaluc.testefadesp.domain.enums.StatusPagamento;
import org.springframework.data.jpa.domain.Specification;

public class PagamentoSpecification {

    public static Specification<PagamentoEntity> comIdPagamento(Long idPagamento) {
        return (root, query, builder) ->
                idPagamento == null ? null : builder.equal(root.get("idPagamento"), idPagamento);
    }

    public static Specification<PagamentoEntity> comCpfCnpj(String cpfCnpj) {
        return (root, query, builder) ->
                cpfCnpj == null ? null : builder.equal(root.get("cpfCnpj"), cpfCnpj);
    }

    public static Specification<PagamentoEntity> comStatusPagamento(StatusPagamento statusPagamento) {
        return (root, query, builder) ->
                statusPagamento == null ? null : builder.equal(root.get("statusPagamento"), statusPagamento);
    }
}

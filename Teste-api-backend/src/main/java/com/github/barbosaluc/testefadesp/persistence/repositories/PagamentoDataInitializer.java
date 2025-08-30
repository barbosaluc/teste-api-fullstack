package com.github.barbosaluc.testefadesp.persistence.repositories;

import com.github.barbosaluc.testefadesp.domain.entities.PagamentoEntity;
import com.github.barbosaluc.testefadesp.domain.enums.MetodoPagamento;
import com.github.barbosaluc.testefadesp.domain.enums.Status;
import com.github.barbosaluc.testefadesp.domain.enums.StatusPagamento;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Component
public class PagamentoDataInitializer {

    private static final Logger logger = LoggerFactory.getLogger(PagamentoDataInitializer.class);
    private final IPagamentoRepository pagamentoRepository;

    public PagamentoDataInitializer(IPagamentoRepository pagamentoRepository) {
        this.pagamentoRepository = pagamentoRepository;
    }

    @EventListener(ApplicationReadyEvent.class)
    public void executeDmlAfterStartup() {
        if (pagamentoRepository.count() > 0) {
            logger.info("Banco de dados já contém registros. Ação de população abortada.");
            return;
        }

        logger.info("Executando script DML para inserir 20 registros...");

        List<PagamentoEntity> pagamentos = List.of(
                createPagamento(1001L, "4111222233334", MetodoPagamento.CARTAO_CREDITO, "4111222233334444", new BigDecimal("150.75"), StatusPagamento.PROCESSADO_SUCESSO, LocalDateTime.now()),
                createPagamento(1002L, "12345678901", MetodoPagamento.PIX, null, new BigDecimal("89.90"), StatusPagamento.PENDENTE_PROCESSAMENTO, null),
                createPagamento(1003L, "5111222233334", MetodoPagamento.CARTAO_CREDITO, "5111222233334444", new BigDecimal("300.00"), StatusPagamento.PROCESSADO_SUCESSO, LocalDateTime.now()),
                createPagamento(1004L, "11223344556677", MetodoPagamento.PIX, null, new BigDecimal("45.50"), StatusPagamento.PENDENTE_PROCESSAMENTO, null),
                createPagamento(1005L, "4444555566667", MetodoPagamento.CARTAO_CREDITO, "4444555566667777", new BigDecimal("120.00"), StatusPagamento.PROCESSADO_FALHA, null),
                createPagamento(1006L, "98765432109", MetodoPagamento.PIX, null, new BigDecimal("75.20"), StatusPagamento.PENDENTE_PROCESSAMENTO, null),
                createPagamento(1007L, "6111222233334", MetodoPagamento.CARTAO_DEBITO, "6111222233334444", new BigDecimal("210.50"), StatusPagamento.PROCESSADO_SUCESSO, LocalDateTime.now()),
                createPagamento(1008L, "09876543210", MetodoPagamento.PIX, null, new BigDecimal("60.00"), StatusPagamento.PENDENTE_PROCESSAMENTO, null),
                createPagamento(1009L, "4777888899990", MetodoPagamento.CARTAO_CREDITO, "4777888899990000", new BigDecimal("95.75"), StatusPagamento.PROCESSADO_FALHA, null),
                createPagamento(1010L, "12312312312", MetodoPagamento.PIX, null, new BigDecimal("180.00"), StatusPagamento.PENDENTE_PROCESSAMENTO, null),
                createPagamento(1011L, "5555666677778", MetodoPagamento.CARTAO_CREDITO, "5555666677778888", new BigDecimal("250.00"), StatusPagamento.PENDENTE_PROCESSAMENTO, null),
                createPagamento(1012L, "32132132132", MetodoPagamento.PIX, null, new BigDecimal("110.00"), StatusPagamento.PROCESSADO_SUCESSO, LocalDateTime.now()),
                createPagamento(1013L, "6222333344445", MetodoPagamento.CARTAO_DEBITO, "6222333344445555", new BigDecimal("175.50"), StatusPagamento.PENDENTE_PROCESSAMENTO, null),
                createPagamento(1014L, "99988877766", MetodoPagamento.PIX, null, new BigDecimal("25.00"), StatusPagamento.PROCESSADO_SUCESSO, LocalDateTime.now()),
                createPagamento(1015L, "4999000011112", MetodoPagamento.CARTAO_CREDITO, "4999000011112222", new BigDecimal("400.00"), StatusPagamento.PROCESSADO_SUCESSO, LocalDateTime.now()),
                createPagamento(1016L, "12345678901234", MetodoPagamento.PIX, null, new BigDecimal("55.50"), StatusPagamento.PROCESSADO_SUCESSO, LocalDateTime.now()),
                createPagamento(1017L, "6333444455556", MetodoPagamento.CARTAO_DEBITO, "6333444455556666", new BigDecimal("135.20"), StatusPagamento.PROCESSADO_SUCESSO, LocalDateTime.now()),
                createPagamento(1018L, "9998887776655", MetodoPagamento.PIX, null, new BigDecimal("220.00"), StatusPagamento.PROCESSADO_SUCESSO, LocalDateTime.now()),
                createPagamento(1019L, "5999000011112", MetodoPagamento.CARTAO_CREDITO, "5999000011112222", new BigDecimal("88.80"), StatusPagamento.PROCESSADO_SUCESSO, LocalDateTime.now()),
                createPagamento(1020L, "12341234123412", MetodoPagamento.PIX, null, new BigDecimal("195.00"), StatusPagamento.PROCESSADO_SUCESSO, LocalDateTime.now())
        );

        pagamentoRepository.saveAll(pagamentos);
        logger.info("Script DML executado com sucesso! 20 registros adicionados.");
    }

    private PagamentoEntity createPagamento(Long idPagamento, String cpfCnpj, MetodoPagamento metodoPagamento, String numeroCartao, BigDecimal valorPagamento, StatusPagamento statusPagamento, LocalDateTime dataPagamento) {
        PagamentoEntity pagamento = new PagamentoEntity();
        pagamento.setIdPagamento(idPagamento);
        pagamento.setCpfCnpj(cpfCnpj);
        pagamento.setMetodoPagamento(metodoPagamento);
        pagamento.setNumeroCartao(numeroCartao);
        pagamento.setValorPagamento(valorPagamento);
        pagamento.setStatusPagamento(statusPagamento);
        pagamento.setDataPagamento(dataPagamento);
        pagamento.setStatus(Status.ATIVO);
        return pagamento;

    }
}
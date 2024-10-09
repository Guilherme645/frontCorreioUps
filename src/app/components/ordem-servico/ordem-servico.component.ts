import { Component } from '@angular/core';
import { OrdemServicoService } from 'src/app/service/ordem-servico.service';

@Component({
  selector: 'app-ordem-servico',
  templateUrl: './ordem-servico.component.html',
  styleUrls: ['./ordem-servico.component.css']
})
export class OrdemServicoComponent {
  ordemServico = {
    numero: '1020',  // Número da ordem
    cliente: 'Alícia Nicole Assunção',  // Nome do cliente
    situacao: 'Confirmado',  // Situação da ordem
    dataEntrada: '2024-10-09',  // Data de entrada
    horaEntrada: '08:30',  // Hora de entrada
    dataSaida: '2024-10-12',  // Data de saída
    canalVenda: 'Kautrite III',  // Canal de venda
    centroCusto: 'Centro de Custo 01',  // Centro de custo
    prioridade: 'Alta',  // Prioridade
    vendedor: 'João da Silva',  // Nome do vendedor
    tecnico: 'Técnico 01',  // Nome do técnico responsável
    potencia: '1000W',  // Potência do equipamento
    tensaoEntrada: '220V',  // Tensão de entrada do equipamento
    tensaoSaida: '110V',  // Tensão de saída do equipamento
    equipamento: 'Gerador',  // Equipamento em manutenção
    marca: 'Marca X',  // Marca do equipamento
    modelo: 'Modelo Y',  // Modelo do equipamento
    serie: '12345',  // Número de série do equipamento
    condicoes: 'Bom estado',  // Condições do equipamento
    defeitos: 'Não liga',  // Defeitos apresentados
    acessorios: 'Cabos e controle remoto'  // Acessórios entregues com o equipamento
  };

  constructor(private ordemServicoService: OrdemServicoService) { }

  criarOrdemServico() {
    // Verifique os valores antes do envio
    console.log('Payload enviado:', this.ordemServico);

    // Enviar a ordem de serviço ao serviço
    this.ordemServicoService.criarOrdemServico(this.ordemServico).subscribe(
      response => {
        console.log('Ordem de serviço criada com sucesso:', response);
      },
      error => {
        console.error('Erro ao criar ordem de serviço:', error);
      }
    );
  }
}

import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.html',
  styleUrl: './experiences.scss',
})
export class Experiences {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Monitor de Campo',
        p: 'Greenpeace Brasil | Mai 2017 - Abr 2019',
      },
      text: '<p> Responsável por supervisionar colegas de equipe, avaliando se estavam executando o trabalho conforme as diretrizes da organização. A atividade principal envolvia a captação de doadores nas ruas, realizando cadastros com dados pessoais. Minha função era garantir que os captadores fornecessem todas as informações corretamente e que os doadores compreendessem que se tratava de uma contribuição mensal, com valor definido. </p>',
    },
    {
      summary: {
        strong: ' Líder de Equipe',
        p: 'Appco Group Brasil | Nov 2015 - Mar 2017',
      },
      text: '<p> Responsável por ministrar treinamentos diários à equipe, ensinando técnicas de abordagem e vendas em espaços públicos. Realizava o planejamento semanal e mensal de metas, além de atuar diariamente nas ruas do centro do Rio de Janeiro, auxiliando os membros menos experientes, oferecendo suporte e orientações sobre como lidar com o público e com potenciais clientes. </p>',
    },
  ]);
}

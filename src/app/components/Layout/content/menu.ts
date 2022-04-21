import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Home',
    url: 'home'
  },
  {
    label: 'Análises',
  },
  {
    label: 'Pessoas',
    posicao: 0,
    subItems: [
      {
        label: 'Funcionário',
        url: 'funcionario'
      },
      {
        label: 'Fornecedor',
        url: 'fornecedor'
      },
      {
        label: 'Tipo Fornecedor',
        url: 'tipofornecedor'
      },
      {
        label: 'Propriedade',
        url: 'propriedade'
      }
    ]   
  },
  {
    label: 'PCP',
    posicao: 1,
    subItems: [
      {
        label: 'Local Armazenamento',
        url: 'localarmazenamento'
      },
      {
        label: 'Materia Prima',
        url: 'materiaprima'
      },
      {
        label: 'Ração',
        url: 'racao'
      },
      {
        label: 'Ordem de Produção',
        url: 'ordemProducao'
      },
      {
        label: 'Vacina',
        url: 'vacina'
      }
    ]   
  },
  {
    label: 'Manejos',
    posicao: 2,
    subItems: [
      {
        label: 'Produção de Ração',
        url: 'loteProducao'
      },
      {
        label: 'Alimentação',
        url: ''
      },
      {
        label: 'Vacinação',
        url: ''
      },
      {
        label: 'Pesagem',
        url: ''
      }
    ]   
  },
  {
    label: 'Animal',
    posicao: 3,
    subItems: [
      {
        label: 'Tipo Morte',
        url: 'tipomorte'
      },
      {
        label: 'Raça',
        url: 'raca'
      },
      {
        label: 'Regime Engorda',
        url: 'regimeengorda'
      },
      {
        label: 'Estado Animal',
        url: 'estadoanimal'
      },
      {
        label: 'Sexo',
        url: 'sexoanimal'
      },
      {
        label: 'Curral-Piquete',
        url: 'curralpiquete'
      },
      {
        label: 'Lote',
        url: 'lote'
      }
    ]   
  },
  {
    label: 'Consultas',
  },
  {
    label: 'Relatórios',
  }
];
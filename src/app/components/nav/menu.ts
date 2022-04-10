import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Home',
    url: 'home'
  },
  {
    label: 'Pessoas',
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
    subItems: [
      {
        label: 'Local Armazenamento',
        url: 'localarmazenamento'
      },
      {
        label: 'Materia Prima',
        url: 'materiaprima'
      }
    ]   
  },
  {
    label: 'Alimentação',
  },
  {
    label: 'Vacinação',
  },
  {
    label: 'Pesagem',
  },
  {
    label: 'Animal',
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
      }
    ]   
  }
];
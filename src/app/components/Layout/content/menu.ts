import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 0,
    label: 'Home',
    url: 'home'
  },
  {
    id: 1,
    label: 'Análises',
    url: 'analise',
    roles: ['ROLE_ADMIN']   
  },
  {
    id: 2,
    label: 'Pessoas',
    subItems: [
      {
        id: 66,
        label: 'Administrador',
        url: 'administrador/list',
        roles: ['ROLE_DIRETOR']
      },
      {
        id: 3,
        label: 'Funcionário',
        url: 'funcionario',
        roles: ['ROLE_ADMIN']
      },
      {
        id: 4,
        label: 'Fornecedor',
        url: 'fornecedor'
      },
      {
        id: 5,
        label: 'Tipo Fornecedor',
        url: 'tipofornecedor'
      },
      {
        id: 6,
        label: 'Propriedade',
        url: 'propriedade'
      }
    ],
    roles: ['ROLE_FUNCIONARIO'] 
  },
  {
    id: 7,
    label: 'PCP',
    subItems: [
      {
        id: 8,
        label: 'Local Armazenamento',
        url: 'localarmazenamento'
      },
      {
        id: 9,
        label: 'Materia Prima',
        url: 'materiaprima'
      },
      {
        id: 10,
        label: 'Ração',
        url: 'racao'
      },
      {
        id: 11,
        label: 'Ordem de Produção',
        url: 'ordemProducao',
        roles: ['ROLE_FUNCIONARIO']
      }
    ]   
  },
  {
    id: 12,
    label: 'Manejos',
    subItems: [
      {
        id: 13,
        label: 'Produção de Ração',
        url: 'loteProducao'
      },
      {
        id: 14,
        label: 'Alimentação',
        url: 'alimentacao'
      },
      {
        id: 15,
        label: 'Vacinação',
        url: 'vacinacao'
      },
      {
        id: 16,
        label: 'Pesagem',
        url: 'pesagem'
      }
    ],
    roles: ['ROLE_FUNCIONARIO']
  },
  {
    id: 17,
    label: 'Animal',
    subItems: [
      {
        id: 40,
        label: 'Animal Chip',
        url: 'animalchip',
        roles: ['ROLE_FUNCIONARIO']
      },
      {
        id: 24,
        label: 'Lote',
        url: 'lote',
        roles: ['ROLE_FUNCIONARIO']
      },
      {
        id: 18,
        label: 'Tipo Morte',
        url: 'tipomorte'
      },
      {
        id: 19,
        label: 'Raça',
        url: 'raca'
      },
      {
        id: 20,
        label: 'Regime Engorda',
        url: 'regimeengorda'
      },
      {
        id: 21,
        label: 'Estado Animal',
        url: 'estadoanimal'
      },
      {
        id: 22,
        label: 'Sexo',
        url: 'sexoanimal'
      },
      {
        id: 23,
        label: 'Curral-Piquete',
        url: 'curralpiquete'
      },
      {
        id: 25,
        label: 'Vacina',
        url: 'vacina'
      }
    ]   
  },
  {
    id: 60,
    label: 'Consultas',
    subItems: [
      {
        id: 50,
        label: 'Estoque de Ração',
        url: 'estoque'
      },
    ]
  },
  {
    id: 27,
    label: 'Relatórios',  
    url: 'relatorio',
    roles: ['ROLE_ADMIN']
  },
];
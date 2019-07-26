import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

  {
    path: '/home',
    title: 'Accueil',
    icon: 'mdi mdi-home',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    isSubmenu: false,
    submenu: []
  },

  {
    path: '/paositra/personnel/list',
    title: 'Personnel',
    icon: 'mdi mdi-message-bulleted',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    isSubmenu: false,
    submenu: []
  },

  {
    path: '/paositra/courrier',
    title: 'Courrier',
    icon: 'mdi mdi-email',
    class: 'has-arrow',
    label: '',
    labelClass: '',
    extralink: false,
    isSubmenu: true,
    submenu: [

      {
        path: '/paositra/courrier-arriver/list',
        title: 'Arriveé',
        icon: 'mdi mdi-email',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [],
        isSubmenu: false,
      },
      {
        path: '/paositra/courrier-depart/list',
        title: 'Départ',
        icon: 'mdi mdi-email',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [],
        isSubmenu: false,
      }
    ]
  },

  {
    path: '/paositra/cabinnet',
    title: 'Cabinnet',
    icon: 'mdi mdi-view-carousel',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    isSubmenu: false,
    submenu: []
  },
  {
    path: '/paositra/Expediteur',
    title: 'Expediteur',
    icon: 'mdi mdi-view-carousel',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    isSubmenu: false,
    submenu: []
  },
  {
    path: '/paositra/archive',
    title: 'Archive',
    icon: 'mdi mdi-view-carousel',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    isSubmenu: false,
    submenu: []
  },

  {
    path: '/paositra/map',
    title: 'Géolocalisation',
    icon: 'mdi mdi-view-carousel',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    isSubmenu: false,
    submenu: []
  }

];

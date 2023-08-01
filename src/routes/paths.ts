// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  register: path(ROOTS_AUTH, '/register')
};

export const PATH_PAGE = {
  about: '/about-us',
  faqs: '/faqs',
  page403: '/403',
  page404: '/404',
  page500: '/500',
  components: '/components'
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,

  general: {
    app: path(ROOTS_DASHBOARD, '/app')
  },
  mail: {
    root: path(ROOTS_DASHBOARD, '/mail')
  },

  invoice: {
    root: path(ROOTS_DASHBOARD, '/invoice')
  },
  blog: {
    root: path(ROOTS_DASHBOARD, '/blog')
  }
};

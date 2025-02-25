
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/bcb-poc/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/bcb-poc/welcome",
    "route": "/bcb-poc"
  },
  {
    "renderMode": 2,
    "route": "/bcb-poc/welcome"
  },
  {
    "renderMode": 2,
    "route": "/bcb-poc/home"
  },
  {
    "renderMode": 2,
    "route": "/bcb-poc/document"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5683, hash: '0948ba39a82e90f79be0d11cd0e384a83dae01d0ec1b63f613c404379e71d236', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1222, hash: 'ad03eb4d8ddd086cf331d50909d090e97b2da8d3fbd5b09598ae3ca182886a48', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'welcome/index.html': {size: 82818, hash: 'e6cdde0a03bc7cb1700d6a3312c1dd0e850ccd796884fc2bfd38fd0a459206ca', text: () => import('./assets-chunks/welcome_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 54211, hash: 'bb09740227d833531091adfa9bb5157c6a5beadc094293f438186b809fb7f6db', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'document/index.html': {size: 53729, hash: 'be40422756004484eff7d62caf0e5f1b501a04b81d14dd1c0ea7324f9d31d951', text: () => import('./assets-chunks/document_index_html.mjs').then(m => m.default)},
    'styles-4VTHHRSB.css': {size: 237973, hash: 'oSiFnW8XRcM', text: () => import('./assets-chunks/styles-4VTHHRSB_css.mjs').then(m => m.default)}
  },
};

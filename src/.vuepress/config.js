const { description } = require('../../package');
const fs = require("fs");
const path = require("path");

module.exports = {
  // base: '/vuepress-akc-bitacora/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'AKC Bitácora',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: 'Última versión',
    nav: [
      {
        text: 'Notas',
        link: '/notas/',
      },
      {
        text: 'Referencias',
        link: '/referencias/'
      },
      {
        text: 'AntonioKC',
        link: 'https://antoniokc.akcademia.xyz/'
      }
    ],
    sidebar: {
      // '/notas/': [
      //   {
      //     title: 'Notas',
      //     collapsable: false,
      //     sidebarDepth: 2,
      //     children: [
      //       '',
      //       ['20221123-vuepress-git', '20221123: vuepress, git'],
      //     ]
      //   }
      // ],
      '/notas/': getSideBar('notas', 'Notas', true),
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: {
    '@vuepress/plugin-back-to-top': {},
    '@vuepress/plugin-medium-zoom': {},
    'internal-link': {
      linkPattern: /\[\[([\w\s/-]+)(\|(([\w\s/-])+))?\]\]/
    }
  }
}

function getSideBar(folder, title, desc) {
  const extension = [".md"];

  let files = fs
    .readdirSync(path.join(`${__dirname}/../${folder}`))
    .filter(
      (item) =>
        item.toLowerCase() != "readme.md" &&
        fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
        extension.includes(path.extname(item))
    );

  if (desc) {
    files = files.reverse();
  }

  return [{ title: title, children: ["", ...files] }];
}
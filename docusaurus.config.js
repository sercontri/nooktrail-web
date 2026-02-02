// @ts-check
// Las anotaciones JSDoc `@type` permiten autocompletado y comprobación de tipos
// en el editor cuando se usan junto con `@ts-check`.
//
// Existen varias formas equivalentes de declarar la configuración de Docusaurus.
// Documentación oficial:
// https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import path from 'path';

const mdiIconify = require(path.resolve(__dirname, 'src/remark/mdi-iconify.js'));

// Este archivo se ejecuta en Node.js.
// NO usar aquí código del lado cliente (APIs del navegador, JSX, etc.).

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NookTrail',
  tagline: 'Tu rinconcito trail... lleno de consejos, ideas y experiencias',
  favicon: 'img/favicon.ico',
  
  // Opciones de compatibilidad futura
  // Ver: https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Mejora la compatibilidad con la futura versión Docusaurus v4
  },

  // URL pública en producción del sitio
  url: 'https://nooktrail.com',

  // Subruta bajo la cual se sirve el sitio
  // En GitHub Pages suele ser '/<nombre-del-repo>/'
  // En dominio propio normalmente es '/'
  baseUrl: '/',
  
  trailingSlash: false,

  // Configuración para despliegue en GitHub Pages
  // Si no se usa GitHub Pages, estos campos no son estrictamente necesarios
  organizationName: 'sercontri', // Normalmente tu usuario u organización de GitHub
  projectName: 'nooktrail-web', // Normalmente el nombre del repositorio
  deploymentBranch: 'gh-pages',
  
  // Qué hacer cuando se detectan enlaces rotos
  onBrokenLinks: 'throw',

  // Configuración de internacionalización
  // Aunque solo haya un idioma, es recomendable definirlo explícitamente
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  // Plugins adicionales
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['es'],
        indexBlog: true,
        indexDocs: false,
        indexPages: true,
        searchResultLimits: 8,
        searchResultContextMaxLength: 50,
      },
    ],

    // Plugin para zoom en imágenes
    'docusaurus-plugin-image-zoom',

    // Docs: Equipación
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'equipacion',
        path: 'docs-equipacion',
        routeBasePath: 'equipacion',
        sidebarPath: require.resolve('./sidebars-equipacion.js'),
        beforeDefaultRemarkPlugins: [mdiIconify],
      },
    ],

    // Docs: Comunicación
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'comunicaciones',
        path: 'docs-comunicaciones',
        routeBasePath: 'comunicaciones',
        sidebarPath: require.resolve('./sidebars-comunicaciones.js'),
        beforeDefaultRemarkPlugins: [mdiIconify],
      },
    ],

    // Docs: Navegación
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'navegacion',
        path: 'docs-navegacion',
        routeBasePath: 'navegacion',
        sidebarPath: require.resolve('./sidebars-navegacion.js'),
        beforeDefaultRemarkPlugins: [mdiIconify],
      },
    ],

    // Docs: Zarriøsos
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'zarriosos',
        path: 'docs-zarriosos',
        routeBasePath: 'zarriosos',
        sidebarPath: require.resolve('./sidebars-zarriosos.js'),
        beforeDefaultRemarkPlugins: [mdiIconify],
      },
    ],
  ],

  // Presets
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // Se desactiva el sistema de docs por defecto
        // para usar múltiples sistemas de docs independientes
        docs: false,

        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Entradas recientes',
          beforeDefaultRemarkPlugins: [mdiIconify],

          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },

          // URL para el enlace "Editar esta página"
          // Conviene cambiarlo al repo real del proyecto
          editUrl:
            'https://github.com/sercontri/nooktrail-web/tree/main/',

          // Opciones para fomentar buenas prácticas en el blog
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // Configuración del tema
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Imagen social por defecto (Open Graph)
      image: 'img/nooktrail-social-card.png',
      
      // Configuración del zoom de imágenes
      zoom: {
        selector: '.markdown img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'var(--ifm-background-color)',
        },
      },
      
      // Gestión del modo claro/oscuro
      colorMode: {
        respectPrefersColorScheme: true,
      },

      // Barra de navegación superior
      navbar: {
        title: 'NookTrail',
        logo: {
          alt: 'NookTrail',
          src: 'img/nooktrail-logo.svg',
        },
        items: [
          {to: '/zarriosos', label: 'Zarriøsos', position: 'left'},
          {to: '/navegacion', label: 'Navegación', position: 'left'},
          {to: '/comunicaciones', label: 'Comunicaciones', position: 'left'},
          {to: '/equipacion', label: 'Equipación', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/sercontri/nooktrail-web',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub',
          },
        ],
      },

      // Pie de página
      footer: {
        style: 'dark',
        logo: {
          alt: 'NookTrail',
          src: 'img/nooktrail-logo.svg',
          href: 'https://nooktrail.com/',
        },
        links: [
          {
            title: 'NookTrail',
            items: [
              { label: 'Zarriøsos', to: '/zarriosos' },
              { label: 'Navegación', to: '/navegacion' },
              { label: 'Comunicaciones', to: '/comunicaciones' },
              { label: 'Equipación', to: '/equipacion' },
              { label: 'Blog', to: '/blog' },
            ],
          },
          {
            title: 'Comunidad',
            items: [
              { label: 'Instagram', href: 'https://www.instagram.com/nooktrail' },
              { label: 'YouTube', href: 'https://www.youtube.com/@nooktrail' },
              { label: 'TikTok', href: 'https://www.tiktok.com/@nooktrail' },
              { label: 'Facebook', href: 'https://www.facebook.com/nooktrail' },
              { label: 'Discord', href: 'https://discord.gg/HDCYMZsN' },
              { label: 'X', href: 'https://x.com/nooktrail' },
              { label: 'Ko-Fi', href: 'https://ko-fi.com/nooktrail' },
            ],
          },
          {
            title: 'Herramientas',
            items: [
              { label: 'GuruMapas', href: 'https://gurumaps.app' },
              { label: 'gpx.studio', href: 'https://gpx.studio' },
              { label: 'Zello', href: 'https://zello.com/es/' },
            ],
          },
          {
            title: 'Más',
            items: [
              { label: 'Blog', to: '/blog' },
              { label: 'GitHub', href: 'https://github.com/sercontri/nooktrail-web' },
            ],
          },
        ],
        copyright:
          `Copyright © ${new Date().getFullYear()} Nooktrail. Hecho con Docusaurus.`,
      },

      // Configuración del resaltado de código
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
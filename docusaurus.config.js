module.exports = {
  title: 'Open Banking Argentina',
  tagline: 'Proyecto open source para incentivar OPB API',
  url: 'https://openbankingargentina.com.ar',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'rodrigoarias12', // Usually your GitHub org/user name.
  projectName: 'OpenBankingArgentina', // Usually your repo name.
  themeConfig: {
	colorMode: {
      defaultMode: 'light',
      disableSwitch: true
	},
	gtag: {
      trackingID: 'G-W9ZWTYXJ77',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
	googleAnalytics: {
      trackingID: 'G-W9ZWTYXJ77',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    navbar: {
      title: 'OpenBankingArgentina',
      logo: {
        alt: 'OpenBankingArgentina',
        src: 'img/logo.png',
      },
      items: [
		
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs API',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
		{
          href: 'https://openbankapiargentina.azurewebsites.net/swagger/index.html',
          label: 'Sandbox Online',
          position: 'left',
        },
        {
          href: 'https://github.com/rodrigoarias12/OpenBankingArgentinaDocusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs API',
          items: [
            {
              label: 'Transacciones',
              to: 'docs/doc2',
            },
           {
              label: 'Cuenta',
              to: 'docs/doc3',
            },
          ],
        },
        {
          title: 'Comunidad',
          items: [{
             label: 'Debate en GitHub',
              href: 'https://github.com/rodrigoarias12/OpenBankingArgentinaDocusaurus/discussions',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/in/rodrigogonzaloarias/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/rodrigoarias12/OpenBankingArgentinaDocusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OpenBankingArgentina`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
		  blogTitle: 'Open Banking Argentina blog!',
          blogDescription: 'Open Banking Argentina blog!',
          showReadingTime: true, 
        },
		
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
		sitemap: { 
		cacheTime: 600 * 1000, // 600 sec - cache purge period
        changefreq: 'weekly',
        priority: 0.5,
        trailingSlash: false,},
        
      },
    
    ],
  ],
};

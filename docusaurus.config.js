module.exports = {
  title: 'Open Banking Argentina',
  tagline: '',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  plugins: ['@docusaurus/plugin-google-gtag'],
   plugins: ['@docusaurus/plugin-google-analytics'],
  themeConfig: {
	  gtag: {
      trackingID: 'G-TL188N61MM',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
	   googleAnalytics: {
      trackingID: 'G-TL188N61MM',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    navbar: {
      title: 'OpenBankingArgentina',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs API',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
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
              to: 'docs/doc1',
            },
           {
              label: 'Cuenta',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Comunidad',
          items: [{
             label: 'GitHub',
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
          // Please change this to your repo.
          editUrl:
            'https://github.com/rodrigoarias12/OpenBankingArgentinaDocusaurus',
        },
        blog: {
		  blogTitle: 'Open Banking Argentina blog!',
          blogDescription: 'Open Banking Argentina blog!',
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/rodrigoarias12/OpenBankingArgentinaDocusaurus/discussions',
        },
		
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

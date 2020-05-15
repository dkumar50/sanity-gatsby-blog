export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebe3745d52c9f1ce2adca16',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-robsja4b',
                  apiId: '5d6aa551-f912-4e32-b9f3-69ef5038ca88'
                },
                {
                  buildHookId: '5ebe374543a04269c446c063',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-cw1mfn57',
                  apiId: '623fbff8-6e71-45fa-8892-4cda37684bfc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dkumar50/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-cw1mfn57.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

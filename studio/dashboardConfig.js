export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '6021b0606959ce142395e098',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-ofxtfvkw',
                  apiId: 'b3c9a3e3-da30-4be7-b238-2f0d66c1dec9'
                },
                {
                  buildHookId: '6021b061cb835b16197587d4',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-piebaoc2',
                  apiId: 'e81f528d-d0a6-4db0-82fd-2554eb619cf5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fj67890/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-piebaoc2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

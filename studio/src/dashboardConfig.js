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
                  buildHookId: '5e80f9060a4ce4f33985dea6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-i5n4ob9g',
                  apiId: '9c0f99d3-1a30-4eb0-9868-b835e765b7c8'
                },
                {
                  buildHookId: '5e80f90672cb41fb7d892036',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-agzhaahm',
                  apiId: '025544ce-055a-4fa8-8974-a978ea5eb83f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adam8/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-agzhaahm.netlify.com', category: 'apps' }
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

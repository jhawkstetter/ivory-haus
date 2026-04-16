import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'eleventy',
  nodeVersion: '18',

  contentSources: [
    {
      type: 'files',
      rootPath: '.',
      contentDirs: ['_data'],
      models: [

        // ── Site Settings ──────────────────────────────────────────
        {
          name: 'SiteSettings',
          type: 'data',
          filePath: '_data/site.json',
          label: 'Site Settings',
          fields: [
            { type: 'string', name: 'title',              label: 'Site Title' },
            { type: 'string', name: 'description',        label: 'Meta Description' },
            { type: 'string', name: 'phone',              label: 'Phone' },
            { type: 'string', name: 'email',              label: 'Email' },
            { type: 'string', name: 'address',            label: 'Address' },
          ]
        },

      ]
    }
  ],

  siteMap: () => [
    {
      stableId: 'home',
      label: 'Home',
      urlPath: '/',
      isHomePage: true,
    }
  ],
});

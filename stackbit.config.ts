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

        // ── Hero ────────────────────────────────────────────────────
        {
          name: 'Hero',
          type: 'data',
          filePath: '_data/hero.json',
          label: 'Hero Section',
          fields: [
            { type: 'string', name: 'tagline',  label: 'Tagline' },
            { type: 'text',   name: 'headline', label: 'Headline' },
            {
              type: 'list', name: 'ctas', label: 'Call-to-action Buttons',
              items: {
                type: 'object',
                fields: [
                  { type: 'string', name: 'label', label: 'Label' },
                  { type: 'string', name: 'href',  label: 'Link' }
                ]
              }
            }
          ]
        },

        // ── Intro / Philosophy ──────────────────────────────────────
        {
          name: 'Intro',
          type: 'data',
          filePath: '_data/intro.json',
          label: 'Philosophy Section',
          fields: [
            { type: 'string', name: 'eyebrow', label: 'Eyebrow' },
            { type: 'text',   name: 'heading', label: 'Heading' },
            {
              type: 'list', name: 'paragraphs', label: 'Body Paragraphs',
              items: { type: 'object', fields: [ { type: 'text', name: 'text', label: 'Paragraph' } ] }
            },
            {
              type: 'object', name: 'quote', label: 'Featured Quote',
              fields: [
                { type: 'text',   name: 'text',   label: 'Quote Text' },
                { type: 'string', name: 'author', label: 'Attribution' }
              ]
            },
            {
              type: 'list', name: 'stats', label: 'Stats',
              items: {
                type: 'object',
                fields: [
                  { type: 'string', name: 'number', label: 'Number' },
                  { type: 'string', name: 'suffix', label: 'Suffix' },
                  { type: 'string', name: 'label',  label: 'Label' }
                ]
              }
            }
          ]
        },

        // ── Ticker ──────────────────────────────────────────────────
        {
          name: 'Ticker',
          type: 'data',
          filePath: '_data/ticker.json',
          label: 'Services Ticker',
          fields: [
            {
              type: 'list', name: 'items', label: 'Ticker Items',
              items: { type: 'object', fields: [ { type: 'string', name: 'name', label: 'Service' } ] }
            }
          ]
        }

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

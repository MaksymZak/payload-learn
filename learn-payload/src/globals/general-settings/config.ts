import type { GlobalConfig } from 'payload'

const GeneralSettings: GlobalConfig = {
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
      label: 'Site Name',
      admin: {
        description: 'The name of your site.',
      },
    },
    {
      name: 'siteDescription',
      type: 'textarea',
      required: true,
      label: 'Site Description',
      admin: {
        description: 'A short description of your site.',
      },
    },
    {
      name: 'siteURL',
      type: 'text',
      required: true,
      label: 'Site URL',
      admin: {
        description: 'The URL of your site.',
      },
    },
  ],
  slug: 'general-settings',
}

export default GeneralSettings

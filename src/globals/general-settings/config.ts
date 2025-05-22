import type { GlobalConfig } from 'payload'
import { afterChangeHook } from './hooks'

const GeneralSettings: GlobalConfig = {
  slug: 'general-settings',
  hooks: {
    afterChange: [afterChangeHook],
  },
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
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}

export default GeneralSettings

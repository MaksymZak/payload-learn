import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Max: CollectionConfig = {
  slug: 'max',

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'choose',
      type: 'select',
      options: [
        {
          label: 'awddwadwa',
          value: 'option1',
        },
        {
          label: 'addwadwadwa',
          value: 'option2',
        },
      ],
    },
    {
      name: 'checkbox',
      type: 'checkbox',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },

    {
      name: 'number',
      type: 'number',
      required: true,
    },
    {
      name: 'text',
      type: 'text',
      required: true,
    },

    {
      name: 'content',
      type: 'richText',
      // Pass the Lexical editor here and override base settings as necessary
      editor: lexicalEditor({}),
    },
  ],
}

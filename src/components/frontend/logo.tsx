'use client'

import Image from 'next/image'
import { useGeneralSettings } from './providers/general-settings-provider'

export const Logo = () => {
  const settings = useGeneralSettings()

  if (!settings.logo) {
    console.error('Logo not found')
    return null
  }

  const logoUrl = typeof settings.logo === 'string' ? settings.logo : settings.logo?.url
  const logoAlt = typeof settings.logo === 'string' ? 'Logo Alt' : settings.logo?.alt

  if (!logoUrl) {
    console.error('Logo URL is invalid')
    return null
  }

  return <Image src={logoUrl} alt={logoAlt} width={80} height={80} />
}

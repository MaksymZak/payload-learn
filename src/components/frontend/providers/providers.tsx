import React from 'react'
import { GeneralSettingsProvider } from './general-settings-provider'
import { getCachedGeneralSettings, getGeneralSettings } from '@/globals/general-settings/queries'

type Props = {
  children: React.ReactNode
}

export default async function Providers({ children }: Props) {
  const settings = await getCachedGeneralSettings()

  return <GeneralSettingsProvider settings={settings}>{children}</GeneralSettingsProvider>
}

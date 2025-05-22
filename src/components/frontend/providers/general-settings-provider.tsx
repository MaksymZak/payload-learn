'use client'

import { GeneralSetting } from '@/payload-types'
import { createContext, PropsWithChildren, useContext } from 'react'

const SettingsContext = createContext<GeneralSetting | null>(null)

interface SettingsProviderProps extends PropsWithChildren {
  settings: GeneralSetting
}

export const GeneralSettingsProvider = ({ children, settings }: SettingsProviderProps) => {
  return <SettingsContext.Provider value={settings}>{children}</SettingsContext.Provider>
}

export const useGeneralSettings = () => {
  const context = SettingsContext
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider')
  }
  const settings = useContext(context)
  if (settings === null) {
    throw new Error('Please provide settings to the SettingsProvider')
  }
  return settings
}

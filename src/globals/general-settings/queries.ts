import { Config, GeneralSetting } from '@/payload-types'
import payloadConfig from '@/payload.config'
import { getPayload } from 'payload'
import { unstable_cache } from 'next/cache'

type Global = keyof Config['globals']
const slug: Global = 'general-settings'

export const CACHE_TAG = `global_${slug}`

export const getGeneralSettings = async () => {
  const payload = await getPayload({ config: payloadConfig })

  const global = await payload.findGlobal({
    slug, // required
    depth: 1,
  })

  return global
}

export const getCachedGeneralSettings = unstable_cache(
  async () => getGeneralSettings() as Promise<GeneralSetting>,
  [slug],
  {
    tags: [CACHE_TAG],
  },
)

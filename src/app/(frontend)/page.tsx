import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './styles.css'
import { Header } from '@/components/frontend/layout/header'
import { Footer } from '@/components/frontend/layout/footer'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  // Result will be the Header Global.
  const generalSettings = await payload.findGlobal({
    slug: 'general-settings', // required
    depth: 2,
    user,
  })

  // console.log('general-settings', generalSettings)

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <>
      <Header />

      <main className="main">
        <div className="home">
          <div className="content">
            <h1>{generalSettings.siteName}</h1>
            <p>{generalSettings.siteDescription}</p>

            {!user && <h1>Welcome to your new project.</h1>}
            {user && <h1>Welcome back, {user.email}</h1>}
            <div className="links">
              <a
                className="admin"
                href={payloadConfig.routes.admin}
                rel="noopener noreferrer"
                target="_blank"
              >
                Go to admin panel
              </a>
              <a
                className="docs"
                href="https://payloadcms.com/docs"
                rel="noopener noreferrer"
                target="_blank"
              >
                Documentation
              </a>
            </div>
          </div>
          <div className="footer">
            <p>Update this page by editing</p>
            <a className="codeLink" href={fileURL}>
              <code>app/(frontend)/page.tsx</code>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

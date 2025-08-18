import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import CampaignLayout from '@/components/CampaignLayout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CampaignLayout>
      <Component {...pageProps} />
    </CampaignLayout>
  )
}
import { Phone } from 'lucide-react'
import { siteConfig } from '../lib/siteConfig'

export default function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden">
      <a
        href={siteConfig.phoneHref}
        aria-label={`Call ${siteConfig.phone} — Free Estimate`}
        className="flex items-center justify-center gap-2 bg-primary-700 px-4 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-800"
      >
        <Phone className="h-4 w-4" />
        Call {siteConfig.phone} — Free Estimate
      </a>
    </div>
  )
}

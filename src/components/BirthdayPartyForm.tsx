'use client'

import Script from 'next/script'

export default function BirthdayPartyForm() {
  return (
    <>
      <iframe
        src="https://go.valentorcrm.com/widget/form/JD904IJHJ2wvHugquJdV"
        style={{ width: '100%', height: '1088px', border: 'none', borderRadius: '8px' }}
        id="inline-JD904IJHJ2wvHugquJdV"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Birthday Party request"
        data-height="1088"
        data-layout-iframe-id="inline-JD904IJHJ2wvHugquJdV"
        data-form-id="JD904IJHJ2wvHugquJdV"
        title="Birthday Party request"
      />
      <Script src="https://go.valentorcrm.com/js/form_embed.js" strategy="lazyOnload" />
    </>
  )
}

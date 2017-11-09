import { BrowserPolicy } from 'meteor/browser-policy-common'

// Configurations for X-Frame-Options and Content-Security-Policy
BrowserPolicy.content.allowOriginForAll('*.googleapis.com')
BrowserPolicy.content.allowOriginForAll('*.gstatic.com')
BrowserPolicy.content.allowOriginForAll('*.bootstrapcdn.com')
BrowserPolicy.content.allowFontDataUrl()

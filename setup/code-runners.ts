import { defineCodeRunnersSetup } from '@slidev/types'
import monacoRunners from './monaco'
import sanitizeHtml from 'sanitize-html'

export default defineCodeRunnersSetup(() => ({
  ...monacoRunners({}),
  html(code, ctx) {
    return { html: sanitizeHtml(code) }
  },
}))
import { render } from '@create-figma-plugin/ui'
import { h } from 'preact'
import { useState } from 'preact/hooks'
import { highlight, languages } from 'prismjs'
import Editor from 'react-simple-code-editor'

import 'prismjs/components/prism-clike.js'
import 'prismjs/components/prism-javascript.js'
import '!prismjs/themes/prism.css'

function Plugin() {
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`)
  return (
    <Editor
      highlight={function (code: string) {
        return highlight(code, languages.js, 'js')
      }}
      onValueChange={setCode}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12
      }}
      value={code}
    />
  )
}

export default render(Plugin)

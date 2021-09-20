import { render } from '@create-figma-plugin/ui'
import { h } from 'preact'
import { useState } from 'preact/hooks'
import Editor from 'react-simple-code-editor'

function Plugin() {
  const [code, setCode] = useState(
    `function add(a, b) {\n  return a + b;\n}`
  )
  function highlight(code: string) {
    return code
  }
  return (
    <Editor
      value={code}
      onValueChange={setCode}
      highlight={highlight}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12
      }}
    />
  )
}

export default render(Plugin)

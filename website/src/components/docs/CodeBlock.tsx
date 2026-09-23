type CodeBlockProps = {
  code: string
  language?: string
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  return (
    <pre className="docs-code overflow-auto rounded-lg border-1 border-solid border-slate-200 bg-slate-900 p-4 text-sm text-slate-100">
      {language ? <span className="mb-2 block text-xs text-purple-300">{language}</span> : null}
      <code className="whitespace-pre">{code}</code>
    </pre>
  )
}

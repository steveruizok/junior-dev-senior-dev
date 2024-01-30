import React, { useState, useRef, useCallback } from 'react'
import { Highlight, themes } from 'prism-react-renderer'
import { useEditable } from 'use-editable'

export function CodeEditor() {
	const editorRef = useRef(null)
	const [code, setCode] = useState(
		'function test() {}\n\nconsole.log("hello");'
	)

	const onEditableChange = useCallback((code) => {
		setCode(code.slice(0, -1))
	}, [])

	useEditable(editorRef, onEditableChange, {
		disabled: false,
		indentation: 2,
	})

	return (
		<Highlight theme={themes.github} code={code} language="tsx">
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre
					className={`code-editor ${className}`}
					style={style}
					ref={editorRef}
				>
					{tokens.map((line, i) => (
						<React.Fragment key={i}>
							{line
								.filter((token) => !token.empty)
								.map((token, key) => (
									<span {...getTokenProps({ token, key })} />
								))}
							{'\n'}
						</React.Fragment>
					))}
				</pre>
			)}
		</Highlight>
	)
}

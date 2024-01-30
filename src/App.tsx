import React, { useState } from 'react'
import { CodeEditor } from './CodeEditor'

function App() {
	return (
		<div className="App">
			<div className="text-container">
				<div className="code-samples">
					<div className="code-sample">
						<CodeEditor />
						<span className="code-sample-label">Junior Dev</span>
					</div>
					<div className="code-samples-divider" />
					<div className="code-sample">
						<CodeEditor />
						<span className="code-sample-label">Senior Dev</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App

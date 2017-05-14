import React from 'react'
import Sidebar from './Sidebar'

const App = ({ children }) => (
	<div className="App">
		<Sidebar />
		<main className="main-content">
			{children}
		</main>
	</div>
)

export default App

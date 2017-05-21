import React from 'react'
import Sidebar from './Sidebar'

const App = ({ children }) => (
	<div className="App container-fluid no-padding">
		<div className="row no-margin">
			<Sidebar />
			<main className="main-content col-xs-12 col-md">
				{children}
			</main>
		</div>
	</div>
)

export default App

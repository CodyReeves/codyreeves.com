import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'

const defaultProps = {
  children: '',
}

class App extends Component {
  render() {
		const { children } = this.props;

		return (
			<div className="App container-fluid no-padding">
				<div className="row no-margin">
					<Sidebar />
					<main className="main-content col-xs-12 col-md">
						{children}
					</main>
				</div>
			</div>
		)
	}
}

App.defaultProps = defaultProps;

export default App

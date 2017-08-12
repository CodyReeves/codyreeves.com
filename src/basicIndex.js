import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import HomePage from './components/HomePage'
import 'babel-polyfill'

render(
	<Provider store={store}>
		<HomePage />
	</Provider>,
	document.getElementById('root')
)

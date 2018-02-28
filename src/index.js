//@flow
import React from 'react'
import ReactDOM from 'react-dom'
import App from './core/App'
import registerServiceWorker from './registerServiceWorker'

const rootElement = document.getElementById('root');
if (rootElement == null) {
  throw new Error("no root element");
}

ReactDOM.render(
	<App />,
	rootElement
)
registerServiceWorker()

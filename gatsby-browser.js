import React from 'react'
import { Router } from 'react-router-dom'
import { rehydrate } from 'fela-dom'
import { Provider } from 'react-fela'
import { createRenderer } from 'fela'
import felaConfig from './fela.config'

exports.wrapRootComponent = ({ Root }, pluginOptions) => {
	const renderer = createRenderer(felaConfig)
	rehydrate(renderer)
	const wrappedRootComponent = ({ children }) => (
		<Provider renderer={renderer}>
			<Root />
		</Provider>
	)

	return wrappedRootComponent
}

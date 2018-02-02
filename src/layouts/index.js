import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'react-fela'

import theme from './theme'
import Header from '../components/Header'
import './index.css'
import 'normalize.css/normalize.css'

const TemplateWrapper = ({ children }) => (
	<ThemeProvider theme={theme}>
		<div>
			<Helmet
				title="aga5tya aka Prithvi | Bio "
				meta={[
					{
						name: 'description',
						content:
							'Personal site about Aga5tya aka Prithvi Raju M.',
					},
					{
						name: 'keywords',
						content:
							'aga5tya, programmer, front-end, blog, bio, prithvi raju, full-stack developer',
					},
				]}
			>
				<link
					href="https://fonts.googleapis.com/css?family=Spectral"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css?family=Rammetto+One"
					rel="stylesheet"
				/>
			</Helmet>
			<div
				style={{
					margin: '0 auto',
					maxWidth: 960,
					padding: '0px 1.0875rem 1.45rem',
					paddingTop: 0,
				}}
			>
				{children()}
			</div>
		</div>
	</ThemeProvider>
)

TemplateWrapper.propTypes = {
	children: PropTypes.func,
}

export default TemplateWrapper

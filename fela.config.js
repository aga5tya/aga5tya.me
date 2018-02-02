import validator from 'fela-plugin-validator'
import friendlyPsuedo from 'fela-plugin-friendly-pseudo-class'
import placeholderPrefixer from 'fela-plugin-placeholder-prefixer'
import beautifier from 'fela-beautifier'
import webPreset from 'fela-preset-web'
import namedMediaQuery from 'fela-plugin-named-keys'
import whitelistMediaQuery from './fela-whitelist-media-queries'

const mediaQueries = {
	mobileXs: `@media (min-width: 320px)`,
	mobileX: `@media (min-width: 375px)`,
	mobileXl: `@media (min-width: 480px)`,
	tablet: `@media (min-width: 768px)`,
	desktop: `@media (min-width: 991px)`,
	desktopLarge: `@media (min-width: 1280px)`,
}

const plugins = [
	...webPreset,
	friendlyPsuedo(),
	namedMediaQuery(mediaQueries),
	placeholderPrefixer(),
]

const enhancers = []

if (process.env.NODE_ENV === 'development') {
	plugins.push(
		validator({
			logInvalid: true,
			deleteInvalid: true,
		})
	)
	plugins.push(whitelistMediaQuery(mediaQueries))
	enhancers.push(beautifier())
}

const config = {
	plugins,
	enhancers,
}

export default config

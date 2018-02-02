import React from 'react'
import { createComponent } from 'react-fela'
import { Box } from 'kilvin'
import Aga5tyaLogo from '../static/aga5tya.svg'
import ReachOut from '../static/reach-out.png'

const __whiteBg = () => ({
	backgroundColor: 'white',
	height: '100vh',
	width: '90%',
	margin: '0 auto',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
})

const __logo = () => ({
	width: '50%',
	borderRadius: '50',
	borderWidth: 2,
	borderColor: 'blue',
})

const __para = ({ size }) => ({
	fontSize: size || 14,
	fontColor: 'white',
	fontWeight: 'bold',
	padding: 10,
})

const __img = () => ({
	width: 350,
	height: 'auto',
})

const WhiteBg = createComponent(__whiteBg)
const Img = createComponent(__img, 'img', ['src'])
const Logo = createComponent(__logo)
const Paragraph = createComponent(__para)

const IndexPage = () => (
	<WhiteBg>
		<Logo>
			<Aga5tyaLogo />
		</Logo>
		<Box center>
			<Paragraph size={20}>
				Senior Full Stack Engineer at BookMyShow
			</Paragraph>
			<Paragraph>
				First I solve the problem. Then i write Code ♥ In Love with
				Javascript.
			</Paragraph>
			<Img src={ReachOut} />
		</Box>
	</WhiteBg>
)

export default IndexPage

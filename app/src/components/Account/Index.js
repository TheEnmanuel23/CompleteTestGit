import React, { Component } from 'react'
import SocialLogin from './SocialLogin'
import { Col, Card } from 'react-materialize'

class Header extends Component {
	constructor (props) {
		super(props)
	}

	render () {
		return (
			<div id="login">			
					<Col m={6} s={12}>
						<Card className='grey lighten-5' title='Sing in / Sing up'>
							<SocialLogin login={this.props.login} />	
						</Card>
					</Col>
			</div>
		)
	}
}

export default Header
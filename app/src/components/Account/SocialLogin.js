import React, { Component } from 'react'
import firebase from 'firebase'
import { Col } from 'react-materialize'

class SocialLogin extends Component {
	constructor (props) {
		super(props)		
		this.state = { username: null }
		this.googleLogin = this.googleLogin.bind(this)
		this.twitterLogin = this.twitterLogin.bind(this)
		this.facebookLogin = this.facebookLogin.bind(this)
	}

	googleLogin () {
		var provider = new firebase.auth.GoogleAuthProvider()
		firebase.auth().signInWithPopup(provider)
			.then(result => {
				console.log('Ha iniciado sesión')
			})
      .catch((err) => console.log(err.message) )
	}

	twitterLogin () {
		var provider = new firebase.auth.TwitterAuthProvider()
		firebase.auth().signInWithPopup(provider)
			.then(result => {
				console.log('Ha iniciado sesión')
			})
      .catch((err) => console.log(err.message) )
	}

	facebookLogin () {
		var provider = new firebase.auth.FacebookAuthProvider()
		// provider.addScope('public_profile')
		firebase.auth().signInWithPopup(provider)
			.then(result => {
				console.log('Ha iniciado sesión >>' + result.user)
			})
      .catch((err) => console.log("errrrr>>" + err.message) )
	}

	render () {
		return (
			<div className="socialLogin">
					<a className="waves-effect btn blue lighten-1 twitter-buttom" onClick={this.twitterLogin}>
						<i className="fa fa-twitter" aria-hidden="true"></i> Continuar con Twitter
					</a>
					<a className="waves-effect btn red lighten-1 google-buttom" onClick={this.googleLogin}>
						<i className="fa fa-google" aria-hidden="true"></i> Continuar con Google
					</a>
					<a className="waves-effect btn blue darken-4 facebook-buttom" onClick={this.facebookLogin}>
						<i className="fa fa-facebook" aria-hidden="true"></i> Continuar con Facebook
					</a>

			</div>
		)
	}
}

export default SocialLogin
import React, { Component } from 'react'
import firebase from 'firebase'
import config from '../fb_config'
import StepZilla from 'react-stepzilla'
import Pregunta1 from './Pregunta1'
import Pregunta2 from './Pregunta2'
import Pregunta3 from './Pregunta3'
import Pregunta4 from './Pregunta4'
import Pregunta5 from './Pregunta5'
import { Button, Col, Card } from 'react-materialize'


if (!firebase.apps.length)
  firebase.initializeApp(config)

class Test extends Component {	
	constructor () {
		super()
		this.state = {
			testListo : false,
			notaFinal : 0,
			p1: '',
			p2: '',
			p3: '',
			p4: '',
			p5: '',
			save: false
		}
		this.sendDataTest = this.sendDataTest.bind(this)
		this.loadTest = this.loadTest.bind(this)
		this.setRespuestas = this.setRespuestas.bind(this)
	}

	componentDidUpdate () {
		if (this.state.save) {
			this.sendDataTest()
			this.setState({save:false})
		}
	}

	setRespuestas ({p1, p2, p3, p4, p5}) {
		if (p1) this.setState({p1: p1})
		if (p2) this.setState({p2: p2})
		if (p3) this.setState({p3: p3})
		if (p4) this.setState({p4: p4})
		if (p5) this.setState({p5: p5, save: true})
	}

	loadTest () {
		if (this.state.testListo) {
			return <div className="card-panel">
					<Col m={6} s={12}>
						<Card className={this.state.notaFinal <= 5 ? 'deep-orange accent-3' : 'green accent-3'} title='Resultado' actions={[ <Button className="white nota-final-buttom" waves='light' node='a' href='http://www.enmisac.com/funnydev/2017/8/10/4-git/'> Volver</Button>]}>
							<h1>{this.state.notaFinal}/10</h1>
						</Card>
					</Col>			
			</div>
		}
		else {
			const steps = [
		      {name: 'Pregunta 1', component: <Pregunta1 setRespuestas={this.setRespuestas} />},
		      {name: 'Pregunta 2', component: <Pregunta2 setRespuestas={this.setRespuestas} />},
		      {name: 'Pregunta 3', component: <Pregunta3 setRespuestas={this.setRespuestas} />},
		      {name: 'Pregunta 4', component: <Pregunta4 setRespuestas={this.setRespuestas} />},
		      {name: 'Pregunta 5', component: <Pregunta5 setRespuestas={this.setRespuestas} />}
		    ]

			return <div className="card-panel test-component">
				<div>
					<form id="test" >
						<div className='step-progress'>
							<StepZilla 
								steps={steps}
								showNavigation = {false}
								showSteps={false}
							 	preventEnterSubmission={true}
		           />
						</div>
					</form>
				</div>
			</div>
		}
	}

	sendDataTest () {		
		var notaFinal = 0.0
		var totalRespuestasCorrectas = 0

		if (this.state.p1 == "r1") {
			notaFinal += 2
			totalRespuestasCorrectas++
		}
			
		if (this.state.p2 == "r4") {
			notaFinal += 2
			totalRespuestasCorrectas++	
		}
			
		if (this.state.p3 == "r4") {
			notaFinal += 2
			totalRespuestasCorrectas++
		}
			
		if (this.state.p4 == "r4") {
			notaFinal += 2
			totalRespuestasCorrectas++
		}
		console.log(this.state.p5 )

		if (this.state.p5 == "r1") {
			notaFinal += 2
			totalRespuestasCorrectas++
		}
			
		
		firebase.database().ref('users').push({
			user: 'enmisac@gmail.com',
			tests : [ {
				"id" : "test_git_intro",
				"preguntas" : [ {
					"id" : "p1",
					"respuesta" : this.state.p1
				}, {
					"id" : "p2",
					"respuesta" : this.state.p2
				}, {
					"id" : "p3",
					"respuesta" : this.state.p3
				}, {
					"id" : "p4",
					"respuesta" : this.state.p4
				}, {
					"id" : "p5",
					"respuesta" : this.state.p5
				} ],
				"totaFinal" : notaFinal,
				"totalRespuestasBuenas" : totalRespuestasCorrectas
				} ]
		})

		this.setState({
			notaFinal :notaFinal,
			testListo: true
		})
	}

	render () {
		return (
			<div>{this.loadTest()}</div>
		)
	}
}

export default Test
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Input, Button, Col, Card } from 'react-materialize'

class Pregunta1 extends Component{
	constructor (props) {
		super(props)
		this.setRespuesta1 = this.setRespuesta1.bind(this)
	}

	setRespuesta1 (e) {
		e.preventDefault()
		var form = document.getElementById('test')
		var res = form.elements["p1"]
		this.props.setRespuestas({p1: res.value})
		this.props.jumpToStep(1)
	}

	render () {
		return (
			<div>
				<Col m={6} s={12}>
					<Card className='grey lighten-4' title='1 - ¿Qué es git?' actions={[<Button className="black" onClick={this.setRespuesta1}>Siguiente</Button>]}>
						<Input name='p1' type='radio' value='r1' label='Un control de versiones' defaultChecked='checked' />
						<Input name='p1' type='radio' value='r2' label='Un gestor de repositorios' />
						<Input name='p1' type='radio' value='r3' label='Gestor de repositorios local' />
						<Input name='p1' type='radio' value='r4' label='Ninguna de las anteriores' />
					</Card>
				</Col>
			</div>
		)
	}
}

export default Pregunta1
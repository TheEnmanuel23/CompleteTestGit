import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Input, Button } from 'react-materialize'

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
				<p><span>1</span> ¿Qué es git</p>
				<Input name='p1' type='radio' value='r1' label='Un control de versiones' defaultChecked='checked' />
				<Input name='p1' type='radio' value='r2' label='Un gestor de repositorios' />
				<Input name='p1' type='radio' value='r3' label='Gestor de repositorios local' />
				<Input name='p1' type='radio' value='r4' label='Ninguna de las anteriores' />
				<Button onClick={this.setRespuesta1}>Siguiente</Button>
			</div>
		)
	}
}

export default Pregunta1
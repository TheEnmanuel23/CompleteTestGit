import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Input, Button } from 'react-materialize'

class Pregunta5 extends Component{
	constructor (props) {
		super(props)
		this.setRespuesta5 = this.setRespuesta5.bind(this)
	}

	setRespuesta5 (e) {
		var form = document.getElementById('test')
		var res = form.elements["p5"].value
		this.props.setRespuestas({p5: res})
		e.preventDefault()
	}
	
	render () {
		return (
			<div>
				<p><span>5</span> La clave SHA-1 se compone de:</p>
				<Input name="p5" type="radio" value="r1" label="40 caracteres" defaultChecked='checked' />
				<Input name="p5" type="radio" value="r2" label="41 caracteres" />
				<Input name="p5" type="radio" value="r3" label="44 caracteres" />
				<Input name="p5" type="radio" value="r4" label="Todas las anteriores" />
				<Button onClick={this.setRespuesta5}>Listo</Button>
			</div>
		)
	}
}

export default Pregunta5
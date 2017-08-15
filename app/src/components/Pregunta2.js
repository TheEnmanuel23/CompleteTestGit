import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Input, Button } from 'react-materialize'

class Pregunta2 extends Component{
	constructor (props) {
		super(props)
		this.setRespuesta2 = this.setRespuesta2.bind(this)
	}

	setRespuesta2 (e) {
		var form = document.getElementById('test')
		var res = form.elements["p2"].value
		this.props.setRespuestas({p2: res})
		this.props.jumpToStep(2)
		e.preventDefault()
	}

	render () {
		return (
			<div>
				<p><span>2</span> ¿Cómo funciona git?</p>
				<Input name='p2' type='radio' value='r1' label='Crea una copia exacta de todos los archivos modificados' defaultChecked='checked' />
				<Input name='p2' type='radio' value='r2' label='Crea una copia exacta de todos los archivos incluyendo los no modificados' />
				<Input name='p2' type='radio' value='r3' label='Crea una copia del archivo modificado y guarda una referencia a esa modificación' />
				<Input name='p2' type='radio' value='r4' label='Crea un imagen de el estado del proyecto y guarda una referencia a esa imagen<' />
				<Input name='p2' type='radio' value='r5' label='Crea una imagen solo del archivo modificado y guarda una referencia a esa imagen' />
				<Input name='p2' type='radio' value='r6' label='Todas las anteriores son correctas' />
				<Button onClick={this.setRespuesta2}>Siguiente</Button>
			</div>
		)
	}
}

export default Pregunta2
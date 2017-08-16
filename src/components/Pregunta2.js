import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Input, Button, Col, Card } from 'react-materialize'

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
				<Col m={6} s={12}>
					<Card className='grey lighten-4' title='2 - ¿Cómo funciona git?' actions={[<Button className="black" onClick={this.setRespuesta2}>Siguiente</Button>]}>
						<Input name='p2' type='radio' value='r1' label='Crea una copia exacta de todos los archivos modificados' defaultChecked='checked' />
						<Input name='p2' type='radio' value='r2' label='Crea una copia exacta de todos los archivos incluyendo los no modificados' />
						<Input name='p2' type='radio' value='r3' label='Crea una copia del archivo modificado y guarda una referencia a esa modificación' />
						<Input name='p2' type='radio' value='r4' label='Crea un imagen de el estado del proyecto y guarda una referencia a esa imagen<' />
						<Input name='p2' type='radio' value='r5' label='Crea una imagen solo del archivo modificado y guarda una referencia a esa imagen' />
						<Input name='p2' type='radio' value='r6' label='Todas las anteriores son correctas' />
					</Card>
				</Col>
			</div>
		)
	}
}

export default Pregunta2
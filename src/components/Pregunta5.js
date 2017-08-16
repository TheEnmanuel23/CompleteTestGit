import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Input, Button, Col, Card } from 'react-materialize'

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
					<Col m={6} s={12}>
					<Card className='grey lighten-4' title='5 - La clave SHA-1 se compone de' actions={[<Button className="black" onClick={this.setRespuesta5}>Listo</Button>]}>
						<Input name="p5" type="radio" value="r1" label="40 caracteres" defaultChecked='checked' />
						<Input name="p5" type="radio" value="r2" label="41 caracteres" />
						<Input name="p5" type="radio" value="r3" label="44 caracteres" />
						<Input name="p5" type="radio" value="r4" label="Todas las anteriores" />
					</Card>
				</Col>
			</div>
		)
	}
}

export default Pregunta5
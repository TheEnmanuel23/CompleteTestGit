import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Input, Button } from 'react-materialize'

class Pregunta3 extends Component{
	constructor (props) {
		super(props)
		this.setRespuesta3 = this.setRespuesta3.bind(this)
	}

	setRespuesta3 (e) {
		var form = document.getElementById('test')
		var res = form.elements["p3"].value
		this.props.setRespuestas({p3: res})
		this.props.jumpToStep(3)
		e.preventDefault()
	}
	
	render () {
		return (
			<div>
				<p><span>3</span> Los 4 estados de git son</p>
				<Input name='p3' type='radio' value='r1' label='Creación, modificación, preparación y confirmación' defaultChecked='checked' />
				<Input name='p3' type='radio' value='r2' label='Modificación, preparación, confirmación y elminación' />
				<Input name='p3' type='radio' value='r3' label='No son 4 estados, son 5, Creación, modificación, preparación, confirmación, y eliminación' />
				<Input name='p3' type='radio' value='r4' label='No son 4 estados, son 3, modificación, preparación y confirmación' />
				<Button onClick={this.setRespuesta3}>Siguiente</Button>
			</div>
		)
	}
}

export default Pregunta3
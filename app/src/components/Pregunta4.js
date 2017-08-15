import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Input, Button } from 'react-materialize'

class Pregunta4 extends Component{
	constructor (props) {
		super(props)
		this.setRespuesta4 = this.setRespuesta4.bind(this)
	}

	setRespuesta4 (e) {
		var form = document.getElementById('test')
		var res = form.elements["p4"].value
		this.props.setRespuestas({p4: res})
		this.props.jumpToStep(4)
		e.preventDefault()
	}
	
	render () {
		return (
			<div>
				<p><span>4</span> Seleccione la afirmación errónea</p>
				<Input name="p4" type="radio" value="r1" label="Si modifico un archivo, puedo recuperar el estado anterior" defaultChecked='checked' />
				<Input name="p4" type="radio" value="r2" label="Si elimino un archivo, lo puedo recuperar al moverme un estado anterior del proyecto" />
				<Input name="p4" type="radio" value="r3" label="Hay 3 estados que conforman el flujo de trabajo local de git" />
				<Input name="p4" type="radio" value="r4" label="Git guarda el nombre del archivo y el código hash de sus contenidos para identifar los cambios" />
				<Button onClick= {this.setRespuesta4}>Siguiente</Button>
			</div>
		)
	}
}

export default Pregunta4
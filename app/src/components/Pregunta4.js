import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Input, Button, Col, Card } from 'react-materialize'

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
					<Col m={6} s={12}>
					<Card className='grey lighten-4' title='4 - Seleccione la afirmación errónea' actions={[<Button className="black" onClick={this.setRespuesta4}>Siguiente</Button>]}>
						<Input name="p4" type="radio" value="r1" label="Si modifico un archivo, puedo recuperar el estado anterior" defaultChecked='checked' />
						<Input name="p4" type="radio" value="r2" label="Si elimino un archivo, lo puedo recuperar al moverme un estado anterior del proyecto" />
						<Input name="p4" type="radio" value="r3" label="Hay 3 estados que conforman el flujo de trabajo local de git" />
						<Input name="p4" type="radio" value="r4" label="Git guarda el nombre del archivo y el código hash de sus contenidos para identifar los cambios" />
					</Card>
				</Col>
			</div>
		)
	}
}

export default Pregunta4
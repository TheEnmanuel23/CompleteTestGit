import React, { Component } from 'react'
import firebase from 'firebase'
import config from '../fb_config'
import { Carousel, Row, Input, Button } from 'react-materialize';

if (!firebase.apps.length)
  firebase.initializeApp(config)

class Preguntas extends Component {	
	constructor () {
		super()
		this.sendDataTest = this.sendDataTest.bind(this)
		this.state = {
			testListo : false,
			notaFinal : 0
		}
		this.loadTest = this.loadTest.bind(this)
	}

	siguiente (e) {
		$('.carousel').carousel('next')
		e.preventDefault()
	}

	loadTest () {
		if (this.state.testListo) {
			return <div>
				<h1>Listo!! Tu nota ha sido {this.state.notaFinal}/10</h1>
			</div>
		}
		else {
			return <div>
				<form id="test" onSubmit={this.sendDataTest} >
					<Carousel options={{ fullWidth: true }}>
						<div>
							<p><span>1</span> ¿Qué es git</p>
							<Input name='p1' type='radio' value='r1' label='Un control de versiones' defaultChecked='checked' />
							<Input name='p1' type='radio' value='r2' label='Un gestor de repositorios' />
							<Input name='p1' type='radio' value='r3' label='Gestor de repositorios local' />
							<Input name='p1' type='radio' value='r4' label='Ninguna de las anteriores<' />
							<Button waves='blue' onClick={this.siguiente} >Siguiente</Button>
						</div>	

						<div>
							<p><span>2</span> ¿Cómo funciona git?</p>
							<Input name='p2' type='radio' value='r1' label='Crea una copia exacta de todos los archivos modificados' defaultChecked='checked' />
							<Input name='p2' type='radio' value='r2' label='Crea una copia exacta de todos los archivos incluyendo los no modificados' />
							<Input name='p2' type='radio' value='r3' label='Crea una copia del archivo modificado y guarda una referencia a esa modificación' />
							<Input name='p2' type='radio' value='r3' label='Crea un imagen de el estado del proyecto y guarda una referencia a esa imagen<' />
							<Input name='p2' type='radio' value='r5' label='Crea una imagen solo del archivo modificado y guarda una referencia a esa imagen' />
							<Input name='p2' type='radio' value='r6' label='Todas las anteriores son correctas' />
							<Button waves='blue' onClick={this.siguiente}>Siguiente</Button>
						</div>
						<div>
							<p><span>3</span> Los 4 estados de git son</p>
							<Input name='p3' type='radio' value='r2' label='Creación, modificación, preparación y confirmación' defaultChecked='checked' />
							<Input name='p3' type='radio' value='r3' label='Modificación, preparación, confirmación y elminación' />
							<Input name='p3' type='radio' value='r4' label='No son 4 estados, son 5, Creación, modificación, preparación, confirmación, y eliminación' />
							<Input name='p3' type='radio' value='r5' label='No son 4 estados, son 3, modificación, preparación y confirmación' />
							<Button waves='blue' onClick={this.siguiente}>Siguiente</Button>
						</div>
						<div>
							<p><span>4</span> Seleccione la afirmación errónea</p>
							<Input name="p4" type="radio" value="r1" label="Si modifico un archivo, puedo recuperar el estado anterior<" defaultChecked='checked' />
							<Input name="p4" type="radio" value="r2" label="Si elimino un archivo, lo puedo recuperar al moverme un estado anterior del proyecto" />
							<Input name="p4" type="radio" value="r3" label="Hay 3 estados que conforman el flujo de trabajo local de git" />
							<Input name="p4" type="radio" value="r4" label="Git guarda el nombre del archivo y el código hash de sus contenidos para identifar los cambios" />
							<Button waves='blue' onClick={this.siguiente}>Siguiente</Button>
						</div>
						<div>
							<p><span>5</span> La clave SHA-1 se compone de:</p>
							<Input name="p5" type="radio" value="r1" label="40 caracteres" defaultChecked='checked' />
							<Input name="p5" type="radio" value="r2" label="41 caracteres" />
							<Input name="p5" type="radio" value="r3" label="44 caracteres" />
							<Input name="p5" type="radio" value="r4" label="Todas las anteriores" />				
							<Button waves='light'>Listo</Button>
						</div>
					</Carousel>
				</form>
			</div>
		}
	}

	sendDataTest (e) {
		var form = document.getElementById('test')
		var p1 = form.elements["p1"].value
		var p2 = form.elements["p2"].value
		var p3 = form.elements["p3"].value
		var p4 = form.elements["p4"].value
		var p5 = form.elements["p5"].value
		
		var notaFinal = 0.0
		var totalRespuestasCorrectas = 0

		if (p1 == "r1") {
			notaFinal += 2
			totalRespuestasCorrectas++
		}
			
		if (p2 == "r4") {
			notaFinal += 2
			totalRespuestasCorrectas++	
		}
			
		if (p3 == "r4") {
			notaFinal += 2
			totalRespuestasCorrectas++
		}
			
		if (p4 == "r4") {
			notaFinal += 2
			totalRespuestasCorrectas++
		}
			
		if (p5 == "r1") {
			notaFinal += 2
			totalRespuestasCorrectas++
		}
			
		
		firebase.database().ref('users').push({
			user: 'enmisac@gmail.com',
			tests : [ {
				"id" : "test_git_intro",
				"preguntas" : [ {
					"id" : "p1",
					"respuesta" : p1
				}, {
					"id" : "p2",
					"respuesta" : p2
				}, {
					"id" : "p3",
					"respuesta" : p3
				}, {
					"id" : "p4",
					"respuesta" : p4
				}, {
					"id" : "p5",
					"respuesta" : p5
				} ],
				"totaFinal" : notaFinal,
				"totalRespuestasBuenas" : totalRespuestasCorrectas
				} ]
		})

		this.setState({
			notaFinal :notaFinal,
			testListo: true
		})

		e.preventDefault()
	}

	render () {
		return (
			<div>{this.loadTest()}</div>
		)
	}
}

export default Preguntas
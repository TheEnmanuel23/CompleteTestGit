import React, { Component } from 'react'
import firebase from 'firebase'
import config from '../fb_config'

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

	loadTest () {
		if (this.state.testListo) {
			return <div>
				<h1>Listo!! Tu nota ha sido {this.state.notaFinal}/10</h1>
			</div>
		}
		else {
			return <div>
				<form id="test" onSubmit={this.sendDataTest} >
					<div>
						<p>¿Qué es git</p>
						<div>
							<label htmlFor="p1r1">Un control de versiones</label>
							<input type="radio" name="p1" value="r1" id="p1r1"  checked />
						</div>
						<div>
							<label htmlFor="p1r2">Un gestor de repositorios</label>
							<input type="radio" name="p1" value="r2" id="p1r2" />
						</div>
						<div>
							<label htmlFor="p1r3">Gestor de repositorios local</label>
							<input type="radio" name="p1" value="r3" id="p1r3"/>
						</div>
						<div>
							<label htmlFor="p1r4">Ninguna de las anteriores</label>
							<input type="radio" name="p1" value="r4" id="p1r4" />
						</div>
					</div>
					<div>
						<p>¿Cómo funciona git?</p>
						<div>
							<label htmlFor="p2r1">Crea una copia exacta de todos los archivos modificados</label>
							<input type="radio" name="p2" value="r1" id="p2r1" checked />
						</div>
						<div>
							<label htmlFor="p2r2">Crea una copia exacta de todos los archivos incluyendo los no modificados</label>
							<input type="radio" name="p2" value="r2" id="p2r2" />
						</div>
						<div>
							<label htmlFor="p2r3">Crea una copia del archivo modificado y guarda una referencia a esa modificación</label>
							<input type="radio" name="p2" value="r3" id="p2r3" />
						</div>
						<div>
							<label htmlFor="p2r4">Crea un imagen de el estado del proyecto y guarda una referencia a esa imagen</label>
							<input type="radio" name="p2" value="r4" id="p2r4" />
						</div>
						<div>
							<label htmlFor="p2r5">Crea una imagen solo del archivo modificado y guarda una referencia a esa imagen</label>
							<input type="radio" name="p2" value="r5" id="p2r5" />
						</div>
						<div>
							<label htmlFor="p2r6">Todas las anteriores son correctas</label>
							<input type="radio" name="p2" value="r6" id="p2r6" />
						</div>
					</div>
					<div>
						<p>Los 4 estados de git son</p>
						<div>
							<label htmlFor="p3r1">Creación, modificación, preparación y confirmación</label>
							<input type="radio" name="p3" value="r1"  id="p3r1"  checked />
						</div>
						<div>
							<label htmlFor="p3r2">Modificación, preparación, confirmación y elminación</label>
							<input type="radio" name="p3" value="r2" id="p3r2" />
						</div>
						<div>
							<label htmlFor="p3r3">No son 4 estados, son 5, Creación, modificación, preparación, confirmación, y eliminación</label>
							<input type="radio" name="p3" value="r3" id="p3r3" />
						</div>
						<div>
							<label htmlFor="p3r4">No son 4 estados, son 3, modificación, preparación y confirmación</label>
							<input type="radio" name="p3" value="r4" id="p3r4" />
						</div>
					</div>
					<div>
						<p>Seleccione la afirmación errónea</p>
						<div>
							<label htmlFor="p4r1">Si modifico un archivo, puedo recuperar el estado anterior</label>
							<input type="radio" name="p4" value="r1" id="p4r1" checked />
						</div>
						<div>
							<label htmlFor="p4r2">Si elimino un archivo, lo puedo recuperar al moverme un estado anterior del proyecto</label>
							<input type="radio" name="p4" value="r2" id="p4r2" />
						</div>
						<div>
							<label htmlFor="p4r3">Hay 3 estados que conforman el flujo de trabajo local de git</label>
							<input type="radio" name="p4" value="r3" id="p4r3" />
						</div>
						<div>
							<label htmlFor="p4r4">Git guarda el nombre del archivo y el código hash de sus contenidos para identifar los cambios</label>
							<input type="radio" name="p4" value="r4" id="p4r4" />
						</div>
					</div>
					<div>
						<p>La clave SHA-1 se compone de:</p>
						<div>
							<label htmlFor="p5r1">40 caracteres</label>
							<input type="radio" name="p5" value="r1" id="p5r1" checked />
						</div>
						<div>
							<label htmlFor="p5r2">41 caracteres</label>
							<input type="radio" name="p5" value="r2" id="p5r2" />
						</div>
						<div>
							<label htmlFor="p5r3">44 caracteres</label>
							<input type="radio" name="p5" value="r3" id="p5r3" />
						</div>
						<div>
							<label htmlFor="p5r4">Todas las anteriores</label>
							<input type="radio" name="p5" value="r4" id="p5r4" />
						</div>
					</div>
					<input type="submit" value="Listo" />
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
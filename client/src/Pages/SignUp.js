import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import "../../src/Styles/SignUp.css";
import API from "../Utils/API"
import axios from 'axios'

class SignUp extends Component {
  constructor() {
		super()
		this.state = {
			email: '',
			password: '',
			// confirmPassword: '',

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, email: ')
		console.log(this.state.email)
		event.preventDefault()

		//request to server to add a new username/password
		API.signup({
			email: this.state.email,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/Home'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
  }
  //=============================================================
    render() {
        return(
//             <Form>
//   <Form.Row>
//     <Form.Group as={Col} controlId="formGridEmail">
//       <Form.Label
//       value={this.state.email}
//       onChange={this.handleChange}
//       >Email</Form.Label>
//       <Form.Control type="email" placeholder="Enter email" />
//     </Form.Group>

//     <Form.Group as={Col} controlId="formGridPassword">
//       <Form.Label
//       value={this.state.password}
//       onChange={this.handleChange}
//       >Password</Form.Label>
//       <Form.Control type="password" placeholder="Password" />
//     </Form.Group>
//   </Form.Row>

//   <Form.Group controlId="formGridAddress1">
//     <Form.Label>Address</Form.Label>
//     <Form.Control placeholder="1234 Main St" />
//   </Form.Group>

//   <Form.Group controlId="formGridAddress2">
//     <Form.Label>Address 2</Form.Label>
//     <Form.Control placeholder="Apartment, studio, or floor" />
//   </Form.Group>

//   <Form.Row>
//     <Form.Group as={Col} controlId="formGridCity">
//       <Form.Label>City</Form.Label>
//       <Form.Control />
//     </Form.Group>

//     <Form.Group as={Col} controlId="formGridState">
//       <Form.Label>State</Form.Label>
//       <Form.Control as="select">
//         <option>Choose...</option>
//         <option>...</option>
//       </Form.Control>
//     </Form.Group>

//     <Form.Group as={Col} controlId="formGridZip">
//       <Form.Label>Zip</Form.Label>
//       <Form.Control />
//     </Form.Group>
//   </Form.Row>

//   <Form.Group id="formGridCheckbox">
//     <Form.Check type="checkbox" label="Seller" />
//   </Form.Group>
//   <Form.Group id="formGridCheckbox">
//     <Form.Check type="checkbox" label="Buyer" />
//   </Form.Group>

//   <Button variant="primary" type="submit"
//   onClick={this.handleSubmit}>
//     Submit
//   </Button>
// </Form>
<div className="SignupForm">
			<h4>Sign up</h4>
			<form className="form-horizontal">
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="email">email</label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							type="text"
							id="email"
							name="email"
							placeholder="email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="password">Password: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							placeholder="password"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group ">
					<div className="col-7"></div>
					<button
						className="btn btn-primary col-1 col-mr-auto"
						onClick={this.handleSubmit}
						type="submit"
					>Sign up</button>
				</div>
			</form>
		</div>
        );
    }
}

export default SignUp;
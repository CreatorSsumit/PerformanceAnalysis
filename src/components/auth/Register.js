import React, { Component } from 'react';
import registerImage from '../../img/register.png';
import { connect } from "react-redux"
import { registeruser } from "../../actions/index";
import { Link } from "react-router-dom"





class Register extends Component {



  state = {
    username: "",
    password: null,
    confirmpassword: null,
    match: true,
    panel: 'user'

  }


  handleSubmit = event => {




    event.preventDefault();

    if (this.state.password !== this.state.confirmpassword) {
      this.setState({ match: false })
    } else {
      this.setState({ match: true })

      this.props.registeruser(this.state)

    }

  }




  onchangevalue = (e) => {
    this.setState({ confirmpassword: e.target.value })

    if (e.target.value !== this.state.password) {
      this.setState({ match: false })
    } else {
      this.setState({ match: true })
    }


  }




  render() {




    return (
      <section ststyle={{ background: '#f3f3f3' }} class="text-gray-600 body-font">
        <div style={{ height: '100vh' }} class="container flex md:flex-row flex-col items-center">
          <div class="lg:flex-grow mt-10 md:px-0 sm:px-0 px-10 mx-auto md:w-1/2 lg:pr-24 md:pr-16 flex flex-col  mb-16 md:mb-0  text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Register yourself to view dashboard </h1>
            <p class="mb-8 leading-relaxed"> Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>

            {this.props.msg ? <div class="alert alert-success" role="alert">
              {this.props.msg ? this.props.msg : 'Server Problem'}
            </div> : ''}
            {this.props.newuser ? this.props.newuser.username ? <div class="alert alert-success" role="alert"> New User {this.props.newuser.username} is created , you can login </div> : " " : " "}



            <div className="flex justify-evenly">
              {/* <button class="w-39 sm:w-40 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Admin</button> */}
              <button class="w-100 sm:w-4hover:text-black text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded">User Registration</button>

            </div>

            <form onSubmit={this.handleSubmit} class=" w-full  mt-5">
              <div class="relative  md:w-full lg:w-full ">

                <input required id='username' placeholder='Enter Email' onChange={e => this.setState({ username: e.target.value })} type="email" name='username' class="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />


                <input required id='password' placeholder='Enter Password' onChange={(e) => this.setState({ password: e.target.value })} type="password" name='password' class="w-full mt-3 bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                <input required id='confirmpassword' placeholder='Enter Confirm Password' onChange={this.onchangevalue} type="password" name='confirmpassword' class="w-full mt-3 bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                {this.state.match ? '' : <p class="text-sm mt-3  text-gray-500 w-full " style={{ color: '#F87171', fontWeight: 'bold' }}>Both Password not Matched</p>
                }

              </div>
              <p class="text-sm mt-5 text-gray-500 w-full " style={{ color: '#F87171', fontWeight: 'bold' }}><Link style={{ textDecoration: 'none' }} to={'/login'}>I have a Account</Link></p>

              <button type='submit' class="w-100  text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register</button>
            </form>

          </div>
          <div class="w-100 py-0" style={{ backgroundImage: `linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)` }}>
            <img class="object-cover object-center rounded" alt="register" src={registerImage} />
          </div>
        </div>
      </section >

    );
  }
}

const mapDispatchToProps = ({
  registeruser: registeruser
})

function mapStateToProps(state) {

  return {
    successmsg: state.data.msg,
    msg: state.data.registererror
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);

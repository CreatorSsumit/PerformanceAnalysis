import React, { Component, Fragment } from 'react';
import registerImage from '../../img/register.png';
import { connect } from "react-redux"
import { loginuser } from "../../actions/index"
import { Link } from "react-router-dom"

class LogIn extends Component {
  state = {
    username: "",
    password: "",
    panel: 'User'
  };



  handleSubmit = event => {
    event.preventDefault();
    this.props.loginuser(this.state)

  };
  render() {





    return (

      <section style={{ background: '#f3f3f3' }} class="text-gray-600 body-font">
        <div style={{ height: '100vh' }} class="container flex md:flex-row flex-col items-center">
          <div class="lg:flex-grow mt-10 md:px-0 sm:px-0 px-10 mx-auto md:w-1/2 lg:pr-24 md:pr-16 flex flex-col  mb-16 md:mb-0  text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Login yourself to view dashboard </h1>
            <p class="mb-8 leading-relaxed"> Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>

            {this.props.msg ? <div class="alert alert-success" role="alert">
              {this.props.msg ? this.props.msg : ''}
            </div> : ""}




            <div className='m-1'><p className='text-success font-weight-bold' style={{ fontFamily: 'Roboto' }}>
              {this.props.newuser ? `${this.props.newuser}` : this.props.location ? <div class="alert alert-success" role="alert">  {this.props.location.state.newuser} </div> : " "
              }</p></div>
            <small className='mb-4 text-danger'>{this.state.panel} is selected to continue </small>
            <div className="flex justify-evenly">

              {this.state.panel === 'Admin' ? <Fragment>
                <button onClick={() => this.setState({ panel: 'Admin' })} class="w-40 bg-indigo-500 hover:text-white hover:bg-indigo-500 text-white font-semibold py-2 px-4 border border-gray-400 rounded">Admin Login</button>

                <button onClick={() => this.setState({ panel: 'User' })} class="w-40  text-black   hover:bg-indigo-300  font-semibold py-2 px-4 border border-gray-400 rounded">User Login</button>

              </Fragment> : <Fragment>

                <button onClick={() => this.setState({ panel: 'Admin' })} class="w-40  text-black   hover:bg-indigo-300  font-semibold py-2 px-4 border border-gray-400 rounded">Admin Login</button>
                <button onClick={() => this.setState({ panel: 'User' })} class="w-40 bg-indigo-500 hover:text-white hover:bg-indigo-500 text-white font-semibold py-2 px-4 border border-gray-400 rounded">User Login</button>


              </Fragment>}
            </div>

            <form onSubmit={this.handleSubmit} class=" w-full  mt-5">
              <div class="relative  md:w-full lg:w-full ">

                <input required id='username' placeholder={`Enter ${this.state.panel} Email`} onChange={e => this.setState({ username: e.target.value })} type="email" name='username' class="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />


                <input required id='password' placeholder={`Enter ${this.state.panel} Password`} onChange={(e) => this.setState({ password: e.target.value })} type="password" name='password' class="w-full mt-3 bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />



              </div>
              <p onClick={() => localStorage.clear()} class="text-sm mt-5 text-gray-500 w-full " style={{ color: '#F87171', fontWeight: 'bold' }}><Link style={{ textDecoration: 'none' }} to={'/register'}>Create new Account</Link></p>

              <button type='submit' class="w-100  text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
            </form>

          </div>
          <div class="w-100" style={{ backgroundImage: `linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)` }}>
            <img class="object-cover object-center rounded" alt="register" src={registerImage} />
          </div>
        </div>
      </section>


    );
  }
}

const mapDispatchToProps = ({
  loginuser: loginuser
})

function mapStateToProps(state) {

  return {
    msg: state.data.registererror
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);

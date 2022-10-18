const React = require('react')
const Navbar = require ('../ReusableReactComponents/Navbar')

class Signup extends React.Component {
    render () {
        return (
            <div>
                <Navbar />
              <h1>Create New Account</h1> 

              <form action='/user/signup' method='post'>
                <fieldset>
                    <legend>Create New Account</legend>

                    <label htmlFor="username">Username</label> <br />
                    <input type='text' name='username' required/> <br />
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type='text' name='email' required/>
                    <br />
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type='password' name='password' required/> 
                    <input type='submit' value='Create'/>
                </fieldset>
              </form>

              <div>
                <p>
                    Already have an account? <a href='/user/signin'>Sign in.</a>{' '}
                </p>
              </div>
            </div>
        )
    }
}

const styles = {

}
module.exports = Signup
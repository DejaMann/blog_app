const React = require('react')
const Navbar = require ('../ReusableReactComponents/Navbar')

class Signin extends React.Component {
    render () {
        return (
            <div>
                <Navbar />
              <h1>Sign In</h1> 

              <form action='/user/signin' method='post'>
                <fieldset>
                    <legend>Sign In</legend>

                    <label htmlFor="username">Username</label> <br />
                    <input type='text' name='username' required/> <br />
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type='password' name='password' required/>
                    <br />
                    <input type='submit' value='Log In'/>
                </fieldset>
              </form>
            </div>
        )
    }
}


module.exports = Signin
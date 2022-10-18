const React = require('react')
// navigation on homepage
class Navbar extends React.Component {
    render(){
        const {loggedInUser} = this.props
        return (
            <nav style = {styles.container}>
                <a href='/'>Home</a>
                <a href='/blog'>Blogs</a>
                <a href='/blog/new'>Create New</a>
                <a href='/user/signup'>Sign In/Up</a>
                <a href='/user/signout'>Sign Out</a>
                {loggedInUser && <h6>{loggedInUser}</h6>}
                {loggedInUser && <a href='/user/signout'>Signout</a>}
            </nav>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
    }
}
module.exports = Navbar
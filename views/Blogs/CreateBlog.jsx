const React = require('react')
const Navbar = require ('../ReusableReactComponents/Navbar')

class CreateBlog extends React.Component {
    render() {
        return(
            <React.Fragment>
            <Navbar />
            <head>
            <link rel="stylesheet" href="/CSS/app.css" />
            </head>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <form style = {styles.container} action='/blog' method='post'>
                   <h3>Create New Blog</h3>
                    <input type='text' name='title' placeholder='Title' required/> <br />

                    <input type='text' name='body' placeholder='Body' rows='24' cols='50' required/> <br />

                    <input type='text' name = 'author' placeholder='Author' required/> <br />

                    <input type='text' name = 'hometown' placeholder='Hometown' required/> <br />

                    <input type='submit' value = 'Create Blog'/>
                </form>
            </div>
        </React.Fragment>

        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

    }
}

module.exports = CreateBlog
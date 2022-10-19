// === mapping out what to show on ShowBlog.jsx
const React = require('react')
const Navbar = require('../ReusableReactComponents/Navbar')

class Blogs extends React.Component {
    render(){
        const {blogs, loggedInUser} = this.props; // destructuring
        const {loggedInUser} = this.props
            return ( // add styles to div
            <div>
                <head>
                    <link rel="stylesheet" href="/CSS/app.css" />
                </head>

                <h2>Hello, {loggedInUser}</h2>
                <Navbar loggedInUser={loggedInUser} />

                <h1>Blogs</h1>

                <section style = {styles.container}> {blogs.map((blog) => (
                    <div style = {styles.wrapper} className='card'> 
                        <a href={`/blog/${blog._id}`}> 
                        {'  '}
                     <h3>{blog.title}</h2>
                       </a>  
                       <div>
                        <p>{blog.body}</p>
                       </div> 
                        <h5>Written by: {blog.author}</h5>
                        {blog.author === loggedInUser ? (<div>
                            <a href = {`/blog/${blog._id}/edit`}>Edit</a>
                        </div>
                        ) : null}
                    </div>
                    ))}
                </section>
            </div>                
        );       
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    wrapper: {
        padding: '20px',
        margin: '10px',
        width: '300px',
        border: 'solid',
        borderWidth: '2px',
        borderColor: 'black'
    },
}


module.exports = Blogs
const React = require('react')

class Blogs extends React.Component {
    render(){
        const {blog} = this.props
        return (
            <div>
                <h1>{blog.title}</h1> 
                
                <p>{blog.body}</p>
            <h5>Written by: {blog.author}</h5>
            <h6>Likes: {blog.likes}</h6>
        </div>
    }
}

module.exports = ShowBlog
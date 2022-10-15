const React = require('react')

class Edit extends React.Component {
    render(){
        const {fruit} = this.props
        return(
            <div>
                <h1>Edit Page</h1>

                <form action='/blog' method='PUT'>
                    Title: <input type='text' name='title' /> <br />
                    Blog: <input type='text' name='body' /> <br />
                    Author: <input type='text' name = 'Author:' /> <br />
                    Likes: <input type='text' name = 'likes' /> <br />
                    Hometown: <input type='text' name = 'hometown' /> <br />
                    <input type='submit' value = 'create new blog'/>
                </form>
            </div>

        )
    }
}

module.exports = EditBlog
const React = require('react')

class New extends React.Component {
    render(){
        return(
            <div>
                <h1>Create New Blog</h1>

                <form action='/blog' method='POST'>
                    Title: <input type='text' name='title' /> <br />
                    Blog: <input type='text' name='body' /> <br />
                    Author: <input type='text' name = 'Author:' /> <br />
                    Likes: <input type='text' name = 'likes' /> <br />
                    Hometown: <input type='text' name = 'hometown' /> <br />
                    <input type='submit' value = 'create new blog'/>
                </form>
            </div>
        );
    }
}

module.exports = New
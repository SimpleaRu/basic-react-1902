import React, { Component } from 'react'
import PropTypes from 'prop-types'
import commentsWraper from '../decorators/commentsWraper'

class Comments extends Component {

    constructor(props) {
        super(props);
/*         this.state = {
            isCommentsButton: false
        } */
    }

    static propTypes = {
        article: PropTypes.object
    }

    //   toggleItem = openItemId => this.setState({ !openItemId })

    render() {
        const { article, isCommentsButton, commentTogle } = this.props
        console.log(isCommentsButton)
        const commentsArr = article.comments.map((coment) =>
            <p key={coment.id}>
                {coment.text}
            </p>
        )
        return (
            <div>
                <button onClick={commentTogle}>
                    Comments
                </button>
                <section>
                    {this.isCommentsButton && commentsArr}
                </section>
            </div>
        )
    }
}

export default commentsWraper(Comments)
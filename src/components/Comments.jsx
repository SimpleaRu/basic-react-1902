import React, { Component } from 'react'
import PropTypes from 'prop-types'
import commentsWraper from '../decorators/commentsWraper'

class Comments extends Component {


    static propTypes = {
        article: PropTypes.object,
    //from commentsWraper
        isCommentsButton: PropTypes.bool,
        commentTogle: PropTypes.func

    }

    //   toggleItem = openItemId => this.setState({ !openItemId })

    render() {
        const { article, isCommentsButton, commentTogle } = this.props
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
                    {isCommentsButton && commentsArr}
                </section>
            </div>
        )
    }
}

export default commentsWraper(Comments)
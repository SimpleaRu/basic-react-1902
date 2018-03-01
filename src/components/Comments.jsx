import React, { Component } from 'react'
import PropTypes from 'prop-types'
import commentsWraper from '../decorators/commentsWraper'

class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isCommentsButton: false
        }
    }

    static propTypes = {
        article: PropTypes.object
    }

    //   toggleItem = openItemId => this.setState({ !openItemId })

    render() {
        const { article } = this.props

        const commentsArr = article.comments.map((coment) =>
            <p key={coment.id}>
                {coment.text}
            </p>
        )
        return (
            <div>
                <button onClick={() => this.setState({
                    isCommentsButton: !this.state.isCommentsButton
                })}>
                    Comments
                </button>
                <section>
                    {this.state.isCommentsButton && commentsArr}
                </section>
            </div>
        )
    }
}

export default commentsWraper(Comments)
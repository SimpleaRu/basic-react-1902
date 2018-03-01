import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Comments extends Component {
    static propTypes = {
        article: PropTypes.object
    }

    render() {
        //   const numbers = [1, 2, 3, 4]
        const { article } = this.props
        //   console.log(numbers)
        const commentsArr = article.comments.map((number) =>

            <p key={number.id}>
                {number.text}
            </p>

        )
        return (
            <div>
                {commentsArr}
            </div>
        )
    }
}

export default Comments
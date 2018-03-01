import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Comments from './Comments'

class Article extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isCommentsButton: false
        }
    }
    render() {
        const { isOpen, article, onButtonClick } = this.props
        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={() => onButtonClick(article.id)}>{isOpen ? 'close' : 'open'}</button>
                </h2>
                <section>
                    {isOpen && getBody(article, this.onCommentsButton, this.state.isCommentsButton )}

                </section>
            </div>
        )
    }
    onCommentsButton = () => {
        this.setState({ isCommentsButton: !this.state.isCommentsButton })
    }
}

function getBody(article, onCommentsButton, isCommentsButton) {
const commentsCont = <Comments article = {article}/>
    return (
        <div>
            <section>
                {article.text}
            </section>
            <button onClick={onCommentsButton}>comments
            </button>
            <section>
            {isCommentsButton && commentsCont}
               {/*  <Comments article = {article}/> */}
            </section>
        </div>
    )
}

Article.propTypes = {
    isOpen: PropTypes.bool,
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string
    }).isRequired,
    onButtonClick: PropTypes.func,

}

export default Article
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Comments from './Comments'

class Article extends PureComponent {
/*     constructor(props) {
        super(props);
        this.state = {
            isCommentsButton: false
        }
    } */
    render() {
        const { isOpen, article, onButtonClick } = this.props
        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={() => onButtonClick(article.id)}>{isOpen ? 'close' : 'open'}</button>
                </h2>
                <section>
                    {isOpen && getBody(article )}

                </section>
            </div>
        )
    }
/*     onCommentsButton = () => {
        this.setState({ isCommentsButton: !this.state.isCommentsButton })
    } */
}

function getBody(article) {
    const commentsCont = <Comments article={article} />
    return (
        <div>
            <section>
                {article.text}
            </section>

            <section>
                {commentsCont}
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
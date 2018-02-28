import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class Article extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isCommentsOpen: false
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
                {isOpen && getBody(article)}
            </div>
        )
    }

}

function getBody(article) {
    return (
        <div>
            <section>
                {article.text}
            </section>
            <button > Commets</button>
            <div>
       
            </div>
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
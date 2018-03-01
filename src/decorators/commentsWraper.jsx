import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    state = {
        isCommentsButton: false

    }

 commentTogle = () => this.setState ({
        isCommentsButton: !this.state.isCommentsButton
     })
 

    render() {
        return (<OriginalComponent {...this.props} {...this.state} commentTogle= {this.commentTogle} />)
    }
}
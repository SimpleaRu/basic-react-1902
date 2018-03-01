import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    state = {
        isCommentsButton: false

    }

 

    render() {
        return (<OriginalComponent {...this.props} {...this.state} />)
    }
}
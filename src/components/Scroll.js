import React from "react";

class Scroll extends React.Component {
    render() {
        return (
            <div style={{
                overflowY: 'scroll', border: '5px solid black', height: '600px'
            }
            }>
                {this.props.children}
            </div >
        )
    }
}


export default Scroll;
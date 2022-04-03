import React, { Component } from 'react';

 class EVENT_HANDELER_CLASS extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       changedValue : " "
    }
  }


handleChange = (e) => {
this.setState({
  changedValue : e.target.value
})
}


  render() {
    return (
      <div>
      <input type = "text"  onChange={this.handleChange} />
      <p>{this.state.changedValue}</p>
      </div>
    )
  }
}


export default EVENT_HANDELER_CLASS;
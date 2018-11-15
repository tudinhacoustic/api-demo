import React, {Component} from 'react'

class Comment extends Component{
  render(){
    return(
      <div style={{marginBottom: 16}}>
        <p style={{fontSize: 20, frontWeight: 600}}>{this.props.currentComment.name}</p>
        <span>{this.props.currentComment.body}</span>
        <span style={{marginLeft: 12, marginRight: 12}}>|</span>
        <span>{this.props.currentComment.timeStamp}</span>
        <hr />
      </div>
    )
  }
}
export default Comment

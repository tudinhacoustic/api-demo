import React, {Component} from 'react'
import Comment from '../presentation/comment'
import styles from './styles'
class Comments extends Component{
  constructor(){
    super()
    this.state = {
      comment: {
        name: '',
        body: '',
        timeStamp: ''
      },
      list: []
    }
  }
  updateComment(event){
    let updateComment = Object.assign({}, this.state.comment)
    updateComment[event.target.id] = event.target.value
    this.setState({
      comment: updateComment
    })
  }
  btnComment(event){
    let updateComment = Object.assign([], this.state.list)
    updateComment.push(this.state.comment)
    this.setState({
      list: updateComment
    })
  }
  render(){
    const style = styles.comment
    const listComment = this.state.list.map((comment, i)=>{
      return(
        <li><Comment currentComment={comment} /></li>
      )
    })
    return(

      <div style={style.container}>
      <h2>Comment: Item 1</h2>
      <div>
        <ul style={{listStyleType: 'none'}}>
          {listComment}
        </ul>
        <div style={{padding: 16}} className="col-md-8">
          <label>Your Name: </label><br />
          <input onChange={this.updateComment.bind(this)} id="name" type="text" placeholder="Your Username" className="form-control" /><br />
          <label>Your Comment: </label><br />
          <input onChange={this.updateComment.bind(this)} id="body" type="text" placeholder="Your Comment" className="form-control" /><br />
          <label>Timestamp: </label><br />
          <input onChange={this.updateComment.bind(this)} id="timeStamp" type="text" placeholder="Your Comment" className="form-control" /><br />
          <button onClick={this.btnComment.bind(this)} className="btn btn-primary">SEND COMMENT</button>
          </div>
      </div>
      </div>
    )
  }
}

export default Comments;

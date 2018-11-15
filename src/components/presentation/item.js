import React, {Component} from 'react'
import styles from './styles'

class Item extends Component{
  render(){
    const style = styles.item;
    return(
      <div style={style.container}>
        <h2 style={style.header}><a style={style.title} href="#">{this.props.currentItem.name}</a></h2>
        Your Age: <span style={{color: 'red'}}>{this.props.currentItem.age}</span><br />
        <span>{this.props.currentItem.comment} Comments</span>
      </div>
    )
  }
}

export default Item;

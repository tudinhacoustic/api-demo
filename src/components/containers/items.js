import React, {Component} from 'react'
import Item from '../presentation/item'
import superagent from 'superagent'
class Items extends Component{
  constructor(){
    super()
    this.state = {
      item:{
        name:'',
        age: '',
        //comment: '',
      },
      list: []
    }
  }
  componentDidMount(){
    console.log('componentDidMount')

    superagent
    .get('/api')
    .query(null)
    .set('Accept', 'application/json')
    .end((err, response)=>{
      if(err)
        alert('ERR'+err)
        console.log(JSON.stringify(response.body))
        let results = response.body.data
        this.setState({
          list: results
        })
    })
  }
  submitItem(event){
    let updateItem = Object.assign({}, this.state.item)
    updateItem[event.target.id] = event.target.value
    this.setState({
      item: updateItem
    })
  }
  btnItem(event){
    let updateItem = Object.assign([], this.state.list)
    updateItem.push(this.state.item)
    this.setState({
      list: updateItem
    })
  }
  render(){
    const listItem = this.state.list.map((item, i)=>{
      return(
        <li key={i}><Item currentItem={item} /></li>
      )
    })

    return(
        <div>
          <ol>
            {listItem}
          </ol>

          <label>Username:</label><br />
          <input onChange={this.submitItem.bind(this)} id="name" type="text" placeholder="Username" className="form-control" /><br />
          <label>Your Age:</label><br />
          <input onChange={this.submitItem.bind(this)} id="age" type="text" placeholder="Your Age" className="form-control" /><br />
          <button onClick={this.btnItem.bind(this)} className="btn btn-primary">Gừi</button>
        </div>
    )
  }
}

export default Items;

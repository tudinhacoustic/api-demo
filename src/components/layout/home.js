import React, {Component} from 'react'
import Items from '../containers/items'
import Comments from '../containers/comments'
class Home extends Component{
  render(){
    return(
      <div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Items />
          </div>
          <div className="col-8">
            <Comments />
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Home;

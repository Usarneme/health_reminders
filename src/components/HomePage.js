import React from 'react'
import selfCare from '../helpers/selfCare'

class HomePage extends React.Component {
  constructor() {
    super()
    this.state = {
      currentItemNumber: 0
    }
  }

  changeCurrentItemNumber = () => {
    this.setState({
      currentItemNumber: Math.floor(Math.random() * Math.floor(selfCare.length))
    }) 
  }

  render() {
    return (
      <div className="home">
        <div>
          <button className="selector" onClick={this.changeCurrentItemNumber}>Pick A New Self Care Item</button>
        </div>
        <div className="selfCareDiv">Try this: </div>
        <div className="selfCareItem">{selfCare[this.state.currentItemNumber]}</div>
      </div>  
    )
  }
}

export default HomePage

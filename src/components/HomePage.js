import React from 'react'
import selfCareActivities from '../helpers/selfCareActivities'
import affirmations from '../helpers/affirmations'
import colorPalette from '../helpers/colorPalette'

class HomePage extends React.Component {
  constructor() {
    super()
    this.state = {
      activityNumber: 0,
      affirmationNumber: 0
    }
  }

  changeActivityNumber = () => {
    this.setState({
      activityNumber: Math.floor(Math.random() * Math.floor(selfCareActivities.length))
    })
    this.changeBackgroundColor()
  }

  changeAffirmationNumber = () => {
    this.setState({
      affirmationNumber: Math.floor(Math.random() * Math.floor(affirmations.length))
    }) 
    this.changeBackgroundColor()
  }

  changeBackgroundColor = () => {
    document.body.style = `background: ${colorPalette[Math.floor(Math.random() * Math.floor(colorPalette.length))]};`
  }

  componentWillMount = () => {
    this.changeBackgroundColor()
  }

  render() {
    return (
      <div className="home">
        <div className="selfCareDiv">Try this: </div>
        <div className="selfCareItem">{selfCareActivities[this.state.activityNumber]}</div>
        <div>
          <button className="selector" onClick={this.changeActivityNumber}>Show A New Self Care Activity</button>
        </div>

        <div className="selfCareDiv">Say this: </div>
        <div className="selfCareItem">{affirmations[this.state.affirmationNumber]}</div>
        <div>
          <button className="selector" onClick={this.changeAffirmationNumber}>Show A New Self Affirmation</button>
        </div>
      </div> 
    )
  }
}

export default HomePage

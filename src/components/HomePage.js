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
        <button className="selector" onClick={this.changeAffirmationNumber}>New Self Affirmation</button>
        <button className="selector" onClick={this.changeActivityNumber}>New Self Care Activity</button>

        <div className="selfCareDiv"> 
          <div>
            <span>Try this: </span> 
            <p className="selfCareItem">{selfCareActivities[this.state.activityNumber]}</p>
          </div>
        </div>

        <div className="affirmationDiv">
          <div>
            <span>Say this: </span> 
            <p className="selfCareItem">{affirmations[this.state.affirmationNumber]}</p>
          </div>
        </div>

      </div> 
    )
  }
}

export default HomePage

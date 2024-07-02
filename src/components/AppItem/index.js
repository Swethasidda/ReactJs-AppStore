// Write your code here
import {Component} from 'react'
import './index.css'

class AppItem extends Component {
  render() {
    const {appDetails} = this.props
    const {appName, imageUrl} = appDetails
    return (
      <li className="app-item">
        <img src={imageUrl} alt={appName} className="image" />
        <p className="app-name">{appName}</p>
      </li>
    )
  }
}

export default AppItem

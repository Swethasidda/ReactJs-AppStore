// Write your code here
import {Component} from 'react'
import './index.css'

class TabItem extends Component {
  render() {
    const {tabItemDetails, tabClick, isActive} = this.props
    const {displayText, tabId} = tabItemDetails
    const onTabItem = () => {
      tabClick(tabId)
    }

    const activebtnClass = isActive ? 'active-button' : ''

    return (
      <li className="tab-item">
        <button
          type="button"
          className={`button ${activebtnClass}`}
          onClick={onTabItem}
        >
          {displayText}
        </button>
      </li>
    )
  }
}

export default TabItem

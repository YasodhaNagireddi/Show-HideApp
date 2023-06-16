// Write your code here

import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirstNameVisibility: false, isLastNameVisibility: false}

  onChangeFirstNameVisibility = () => {
    const {isFirstNameVisibility} = this.state
    this.setState({isFirstNameVisibility: !isFirstNameVisibility})
  }

  onChangeLastNameVisibility = () => {
    const {isLastNameVisibility} = this.state
    this.setState({isLastNameVisibility: !isLastNameVisibility})
  }

  render() {
    const {isFirstNameVisibility, isLastNameVisibility} = this.state
    return (
      <div className="show-hide-app-bg">
        <div className="show-hide-app-card">
          <h1>Show/Hide</h1>
          <div className="show-hide-items-container">
            <div className="show-hide-item-container">
              <button type="button" onClick={this.onChangeFirstNameVisibility}>
                Show/Hide Firstname
              </button>
              {isFirstNameVisibility && (
                <div className="show-hide-app-output-container">
                  <p>Joe</p>
                </div>
              )}
            </div>
            <div className="show-hide-item-container">
              <button type="button" onClick={this.onChangeLastNameVisibility}>
                Show/Hide Lastname
              </button>
              {isLastNameVisibility && (
                <div className="show-hide-app-output-container">
                  <p>Jonas</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide

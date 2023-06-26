// Write your code here
import {Component} from 'react'
import './index.css'

const initialState = {
  isTimerRunning: false,
  timerInMinutes: 0,
  timeInSeconds: 0,
}

class Stopwatch extends Component {
  state = initialState

  componentWillUnmount() {
    this.clearTimerInterval()
  }

  clearTimerInterval = () => clearInterval(this.timerId)

  onClickStart = () => {
    this.timerId = setInterval(() => {
      this.setState(prevState => ({
        timeInSeconds: prevState.timeInSeconds + 1,
      }))
    }, 1000)
    this.setState({isTimerRunning: true})
  }

  onClickStop = () => {
    this.clearTimerInterval(this.timerId)
    this.setState({isTimerRunning: false})
  }

  onClickReset = () => {
    this.clearTimerInterval()
    this.setState({isTimerRunning: false, timeInSeconds: 0})
  }

  getTimerValue = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    const stringyfiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringyfiedSeconds = seconds > 9 ? seconds : `0${seconds}`
    return `${stringyfiedMinutes}:${stringyfiedSeconds}`
  }

  render() {
    const {isTimerRunning} = this.state
    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="stopwatch">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer">
              <img
                className="timer-image"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="heading">Timer</p>
            </div>
            <h1 className="stopwatch-timer">{this.getTimerValue()}</h1>
            <div className="timer-buttons">
              <button
                type="button"
                className="start-button button"
                onClick={this.onClickStart}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-button button"
                onClick={this.onClickStop}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-button button"
                onClick={this.onClickReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch

/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/button-has-type */
// Write your code here
import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'
import AppointmentItem from '../AppointmentItem'

const appointmentsList = []

class Appointments extends Component {
  state = {
    appointmentList: appointmentsList,
    title: '',
    date: '',
    isFavourite: false,
    isStarActive: false,
  }

  onchangeTitle = event => {
    this.setState({title: event.target.value})
  }

  changeDate = event => {
    this.setState({date: event.target.value})
  }

  isStarred = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(each => {
        if (each.id === id) {
          return {...each, isFavourite: !each.isFavourite}
        }
        return each
      }),
    }))
  }

  clickStarred = () => {
    this.setState(prevState => ({isStarActive: !prevState.isStarActive}))
  }

  addAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    if (title !== '' && date !== '') {
      const newAppointment = {
        id: v4(),
        title,
        date,
        isFavourite: false,
      }
      this.setState(prevState => ({
        appointmentList: [...prevState.appointmentList, newAppointment],
        title: '',
        date: '',
      }))
    }
  }

  render() {
    const {appointmentList, title, date, isStarActive} = this.state
    const starFilteredList = appointmentList.filter(
      each => each.isFavourite === true,
    )
    return (
      <div className="pageContainer">
        <div className="cardContainer">
          <div className="large">
            <div>
              <h1 className="heading">Add Appointments</h1>
              <form>
                <label htmlFor="title" className="title">
                  TITLE
                </label>
                <br />
                <input
                  id="title"
                  type="text"
                  className="titleInput"
                  onChange={this.onchangeTitle}
                  value={title}
                />
                <br />
                <label className="title" htmlFor="date">
                  DATE
                </label>
                <br />
                <input
                  id="date"
                  type="date"
                  className="titleInput"
                  onChange={this.changeDate}
                  value={date}
                />
                <div className="buttonContainer">
                  <button className="addButton" onClick={this.addAppointment}>
                    Add
                  </button>
                </div>
              </form>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="appointmentImage"
              />
            </div>
          </div>
          <hr className="horizontalLine" />
          <div className="alignment">
            <h1 className="heading">Appointments</h1>
            <button className="starredButton" onClick={this.clickStarred}>
              Starred
            </button>
          </div>

          <ul className="appointmentsAlignment">
            {isStarActive
              ? starFilteredList.map(each => (
                  <AppointmentItem
                    appointments={each}
                    isStarred={this.isStarred}
                    key={each.id}
                  />
                ))
              : appointmentList.map(each => (
                  <AppointmentItem
                    appointments={each}
                    isStarred={this.isStarred}
                    key={each.id}
                  />
                ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments

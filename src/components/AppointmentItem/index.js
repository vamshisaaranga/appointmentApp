/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
// Write your code here
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {appointments, isStarred} = props
  const {title, date, id, isFavourite} = appointments
  const isFavouriteImage = isFavourite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  const formattedDate = format(new Date(date), 'dd MMM yyy, EEEE')
  const starred = () => {
    isStarred(id)
  }

  return (
    <li className="appointmentContainer">
      <div>
        <p className="appointmentName">{title}</p>
        <p className="scheduledDate">Date: {formattedDate}</p>
      </div>
      <button className="button" data-testid="star">
        <img
          src={isFavouriteImage}
          alt="star"
          className="favouriteImage"
          onClick={starred}
        />
      </button>
    </li>
  )
}

export default AppointmentItem

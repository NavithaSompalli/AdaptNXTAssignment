import {Component} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMoonOutline} from 'react-icons/io5'
import {FaRegBell, FaRegUserCircle} from 'react-icons/fa'

import './index.css'

class NavbarRoute extends Component {
  render() {
    return (
      <nav className="nav-container">
        <div className="profile-container">
          <img
            src="https://res.cloudinary.com/dqyqjbuku/image/upload/v1704165495/profile_rkhizp.avif"
            alt="proflie"
            className="profile"
          />
          <GiHamburgerMenu />
        </div>
        <div className="icons-container">
          <IoMoonOutline />
          <FaRegBell />
          <FaRegUserCircle />
        </div>
      </nav>
    )
  }
}

export default NavbarRoute

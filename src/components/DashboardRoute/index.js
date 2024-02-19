import {Component} from 'react'
import {AiFillDashboard} from 'react-icons/ai'
import {IoPricetagOutline, IoShareSocialOutline, IoClose} from 'react-icons/io5'
import {FaRegListAlt, FaShippingFast, FaSmile} from 'react-icons/fa'
import NavbarRoute from '../NavbarRoute'
import ProductsRoute from '../ProductsRoute'
import './index.css'

class DashboardRoute extends Component {
  state = {
    activeTab: 'dashboard',
  }

  handleTabChange = tab => {
    this.setState({activeTab: tab})
  }

  render() {
    const {activeTab} = this.state
    return (
      <>
        <NavbarRoute />
        <div className="dash-board-container">
          <div className="nav-items-container">
            <button
              className={activeTab === 'dashboard' && 'active'}
              onClick={() => this.handleTabChange('dashboard')}
              type="button"
            >
              <AiFillDashboard /> Dashboard
            </button>
            <button
              className={activeTab === 'inventory' && 'active'}
              onClick={() => this.handleTabChange('inventory')}
              type="button"
            >
              <IoPricetagOutline />
              Inventory
            </button>
            <button
              className={activeTab === 'orders' && 'active'}
              onClick={() => this.handleTabChange('orders')}
              type="button"
            >
              <FaRegListAlt />
              Orders
            </button>
            <button
              className={activeTab === 'shipping' && 'active'}
              onClick={() => this.handleTabChange('shipping')}
              type="button"
            >
              <FaShippingFast />
              Shipping
            </button>
            <button
              className={activeTab === 'channel' && 'active'}
              onClick={() => this.handleTabChange('channel')}
              type="button"
            >
              <IoShareSocialOutline />
              Channel
            </button>
          </div>
          <div className="orders-container">
            <div>
              {activeTab === 'orders' && (
                <>
                  <button type="button" className="order-btn">
                    {activeTab} <IoClose />
                  </button>
                  <ProductsRoute />
                </>
              )}
              {activeTab === 'dashboard' && (
                <div className="dashboard">
                  <button type="button" className="order-btn">
                    {activeTab} <IoClose />
                  </button>
                  <h className="welcome-msg">
                    Welcome to Dashboard{' '}
                    <sub className="headline">
                      Enjoy your shopping
                      <FaSmile className="smiley" />
                    </sub>
                  </h>
                </div>
              )}
              {activeTab === 'inventory' && (
                <div>
                  <button type="button" className="order-btn">
                    {activeTab} <IoClose />
                  </button>
                  <h className="main-heading--msg">Welcome to inventory</h>
                </div>
              )}
              {activeTab === 'shipping' && (
                <div>
                  <button type="button" className="order-btn">
                    {activeTab} <IoClose />
                  </button>
                  <h className="main-heading--msg">Welcome to shipping</h>
                </div>
              )}
              {activeTab === 'channel' && (
                <div>
                  <button type="button" className="order-btn">
                    {activeTab} <IoClose />
                  </button>
                  <h className="main-heading--msg">Welcome to channel</h>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default DashboardRoute

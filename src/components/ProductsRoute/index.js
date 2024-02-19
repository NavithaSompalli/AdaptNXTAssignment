import {Component} from 'react'
import {FaFileImport} from 'react-icons/fa'
import {IoSend, IoPrintOutline} from 'react-icons/io5'
import './index.css'

class ProductsRoute extends Component {
  state = {
    activeTab: 'pending',
  }

  handleTabChange = tab => {
    this.setState({activeTab: tab})
  }

  render() {
    const {activeTab} = this.state
    return (
      <div className="tabs-container">
        <div className="tabs">
          <button
            className={` ${activeTab === 'pending' ? 'active' : ''}`}
            onClick={() => this.handleTabChange('pending')}
            type="button"
          >
            Pending
          </button>
          <button
            className={` ${activeTab === 'accepted' ? 'active' : ''}`}
            onClick={() => this.handleTabChange('accepted')}
            type="button"
          >
            Accepted
          </button>
          <button
            className={` ${activeTab === 'awbCreated' ? 'active' : ''}`}
            onClick={() => this.handleTabChange('awbCreated')}
            type="button"
          >
            AWB Created
          </button>
          <button
            className={` ${activeTab === 'readyToShip' ? 'active' : ''}`}
            onClick={() => this.handleTabChange('readyToShip')}
            type="button"
          >
            Ready to Ship
          </button>
          <button
            className={` ${activeTab === 'shipped' ? 'active' : ''}`}
            onClick={() => this.handleTabChange('shipped')}
            type="button"
          >
            Shipped
          </button>
          <button
            className={` ${activeTab === 'completed' ? 'active' : ''}`}
            onClick={() => this.handleTabChange('completed')}
            type="button"
          >
            Completed
          </button>
          <button
            className={` ${activeTab === 'cancelled' ? 'active' : ''}`}
            onClick={() => this.handleTabChange('cancelled')}
            type="button"
          >
            Cancelled
          </button>
        </div>
        <div className="details-container">
          {activeTab === 'pending' && (
            <div>
              <div className="container">
                <button type="button" className="file-btns">
                  <FaFileImport />
                  import orders
                </button>
                <button type="button" className="file-btns" disabled="true">
                  {' '}
                  <IoSend />
                  Accept{' '}
                </button>
                <button type="button" className="file-btns" disabled="true">
                  <IoPrintOutline />
                  print
                </button>
              </div>
              <table>
                <tr>
                  <th>Channel</th>
                  <th>order No</th>
                  <th>Order Date</th>
                  <th>City</th>
                  <th>Customer Name</th>
                  <th>Order value</th>
                  <th>Status</th>
                  <th>Operations</th>
                </tr>
              </table>
            </div>
          )}
          {activeTab === 'accepted' && <p>accepted</p>}
          {activeTab === 'awbCreated' && <p>awbCreated</p>}
          {activeTab === 'readyToShip' && <p>readyToShip</p>}
          {activeTab === 'shipped' && <p>shipped</p>}
          {activeTab === 'completed' && <p>completed</p>}
          {activeTab === 'cancelled' && <p>Cancelled</p>}
        </div>
      </div>
    )
  }
}

export default ProductsRoute

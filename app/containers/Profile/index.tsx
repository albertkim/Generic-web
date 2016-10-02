import * as React from 'react'
import BasicInfo from './BasicInfo'
import Notifications from './Notifications'

export default class Profile extends React.Component<void, void> {

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div style={{height: '3em'}} />
            <h1>Profile</h1>
          </div>
          <div className='col-md-6'>
            <div className='col-md-12'>
              <h3>Basic info</h3>
            </div>
            <div className='col-md-12'>
              <BasicInfo />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='col-md-12'>
              <h3>Notification settings</h3>
            </div>
            <div className='col-md-12'>
              <Notifications />
            </div>
          </div>
        </div>
      </div>
    )
  }

}

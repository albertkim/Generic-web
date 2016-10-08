import * as React from 'react'
import {BasicInfo} from './BasicInfo'
import {Notifications} from './Notifications'

export class Profile extends React.Component<void, void> {

  render() {
    return (
      <div className='row'>
        <div className='col-md-12'>
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
    )
  }

}

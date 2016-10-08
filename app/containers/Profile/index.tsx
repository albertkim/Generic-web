import * as React from 'react'
import {Profile} from './Profile'

export class ProfileContainer extends React.Component<void, void> {

  render() {
    return (
      <div className='container'>
        <Profile />
      </div>
    )
  }

}

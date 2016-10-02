import * as React from 'react'
import {Footer} from './Footer'
import {Link} from 'react-router'

export class Home extends React.Component<any, any> {
  render() {
    return (
      <div id='home'>

        <div className='container-fluid primary-background'>
          <div className='row' id='hero'>
            <div className='text-center animated fadeInDown' id='hero-contents'>
              <div className='m-b-3' id='logo-wrapper'>
                <img src='' />
              </div>
              <h1 className='primary m-b-1'>Generic</h1>
              <h3 className='font-size-2'>Technology consulting</h3>
              <p className='m-b-2'>Hit me up at albert275@gmail.com</p>
              <Link to='/about' className='btn btn-primary'>Learn more</Link>
            </div>
          </div>
        </div>

        <Footer />

      </div>
    )
  }
}

import * as React from 'react'

export class Home extends React.Component<any, any> {
  render() {
    return (
      <div id='home'>

        <div className='row' id='hero'>
          <div className='text-center' id='hero-contents'>
            <h2>Generic web project</h2>
            <p>Works with the Generic-api project</p>
            <br />
            <div className='horizontal-buttons'>
              <button className='btn btn-primary'>Sign up here</button>
              <button className='btn btn-default'>Request a demo</button>
            </div>
          </div>
        </div>

        <div className='row text-center'>
          <h2 className='m-t-2'>How we can help</h2>
        </div>

        <div className='row' style={{ paddingTop: '3em', paddingBottom: '5em' }} >
          <div className='container text-center'>
            <div className='col-sm-4 col-md-4'>
              <div className='row'>
                <span className='glyphicon glyphicon-send' style={{ fontSize: '5em' }} />
              </div>
              <br />
              <p>Develop your web application</p>
            </div>
            <div className='col-sm-4 col-md-4'>
              <div className='row'>
                <span className='glyphicon glyphicon-piggy-bank' style={{ fontSize: '5em' }} />
              </div>
              <br />
              <p>Make bank</p>
            </div>
            <div className='col-sm-4 col-md-4'>
              <div className='row'>
                <span className='glyphicon glyphicon-stats' style={{ fontSize: '5em' }} />
              </div>
              <br />
              <p>Become the king of the world</p>
            </div>
          </div>
        </div>

        <div className='row' >
          <div className='col-xs-6 col-sm-4 col-sm-offset-2' id='side-text'>
            <div>
              <h2>There are thousands of users already on our platform</h2>
              <br />
              <p>We know that creating web applications is difficult. This project is set up to comunicate with Generic-Api to offer a complete application setup.</p>
              <br />
              <button className='btn btn-primary'>Sign up now</button>
            </div>
          </div>
          <div className='col-xs-6 col-sm-6' id='side-image' />
        </div>

        <div className='row' id='what-we-offer' >
          <div className='col-sm-10 col-sm-offset-2'>
            <h2 className='primary'>What we offer</h2>
            <br />
            <p>This thing number 1</p>
            <p>This thing number 2</p>
            <p>This thing number 3</p>
          </div>
        </div>

        <div className='row'>
         <div className='col-xs-6 col-sm-6' id='side-image' />
          <div className='col-xs-6 col-sm-4' id='side-text'>
            <div>
              <h2>There are thousands of users already on our platform</h2>
              <br />
              <button className='btn btn-primary'>Sign up now</button>
            </div>
          </div>
        </div>

        <div className='row text-center' id='sign-up'>
          <div className='col-sm-4 col-sm-offset-4'>
            <h2 className='m-b-1'>Sign up for our beta!</h2>
            <input type='text' className='form-control m-b-1' placeholder='Email' />
            <button className='btn btn-primary'>Submit</button>
          </div>
        </div>

        <div className='row' id='contact-us'>

        </div>

      </div>
    )
  }
}

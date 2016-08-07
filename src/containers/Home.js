import React from 'react';

export class Home extends React.Component {
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

        <div className='row' style={{ paddingTop: '5em', paddingBottom: '5em' }} >
          <div className='container text-center'>
            <div className='col-sm-4 col-md-4'>
              <div className='row'>
                <span className='glyphicon glyphicon-send' style={{ fontSize: '5em' }} />
              </div>
              <br />
              <p>Point 1</p>
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
              <button className='btn btn-primary'>Sign up now</button>
            </div>
          </div>
          <div className='col-xs-6 col-sm-6' id='side-image' />
        </div>

        <div className='row text-center' style={{ height: '20em' }}>
          <p>Check out these screenshots!</p>
        </div>

        <div className='row' >
         <div className='col-xs-6 col-sm-6' id='side-image' />
          <div className='col-xs-6 col-sm-4' id='side-text'>
            <div>
              <h2>There are thousands of users already on our platform</h2>
              <br />
              <button className='btn btn-primary'>Sign up now</button>
            </div>
          </div>
        </div>

        <div className='row'>

        </div>

      </div>
    )
  }
}

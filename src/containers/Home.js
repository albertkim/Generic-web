import React from 'react';

export class Home extends React.Component {
  render() {
    return (
      <div>

        <div className='row' id='hero'>
          <div className='text-center'>
            <h2>Generic web project</h2>
            <p>Works with the Generic-api project</p>
          </div>
        </div>

        <div className='row' style={{ paddingTop: '5em', paddingBottom: '5em' }} >
          <div className='container text-center'>
            <div className='col-sm-4 col-md-4'>
              <div className='row'>
                <span className='glyphicon glyphicon-send' style={{ fontSize: '5em' }} />
              </div>
              Point 1
            </div>
            <div className='col-sm-4 col-md-4'>
              <div className='row'>
                <span className='glyphicon glyphicon-piggy-bank' style={{ fontSize: '5em' }} />
              </div>
              Make bank
            </div>
            <div className='col-sm-4 col-md-4'>
              <div className='row'>
                <span className='glyphicon glyphicon-stats' style={{ fontSize: '5em' }} />
              </div>
              Become the king of the world
            </div>
          </div>
        </div>

        <div className='row' id='hero'>
          <div className='text-center'>
            <h2>Generic web project</h2>
            <p>Works with the Generic-api project</p>
          </div>
        </div>

        <div className='row' style={{ height: '20em' }} >
          <div className='col-md-4 col-md-offset-2'>

          </div>
          <div className='col-md-6'>
            
          </div>
        </div>

      </div>
    )
  }
}

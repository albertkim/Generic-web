import * as React from 'react'

export class Footer extends React.Component<{}, {}> {
  render() {
    return (
      <div className='row' id='footer'>
        <div className='col-sm-6 col-sm-offset-2' id='footer-left'>
          <div className='col-xs-4'>
            <ul>
              <li>Footer element 1</li>
              <li>Footer element 2</li>
              <li>Footer element 3</li>
            </ul>
          </div>
          <div className='col-xs-4'>
            <ul>
              <li>Footer element 1</li>
              <li>Footer element 2</li>
              <li>Footer element 3</li>
            </ul>
          </div>
          <div className='col-xs-4'>
            <ul>
              <li>Footer element 1</li>
              <li>Footer element 2</li>
              <li>Footer element 3</li>
            </ul>
          </div>
        </div>
        <div className='col-xs-2' id='footer-right'>
          <h2>Generic web</h2>
          <p>Contact</p>
        </div>
      </div>
    )
  }
}

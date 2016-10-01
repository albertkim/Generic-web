import * as React from 'react'

interface StateProps {
  message?: string
}

export default class FormError extends React.Component<StateProps, void> {
  render() {
    if (this.props.message) {
      return <span className='label label-danger'>{this.props.message}</span>
    } else {
      return <span />
    }
  }
}

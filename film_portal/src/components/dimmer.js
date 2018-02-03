import React, { Component } from 'react'
import { Button,Dimmer, Image, Segment,Icon } from 'semantic-ui-react'

export default class DimmerExampleBlurringInverted extends Component {
  state = {}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  render() {
    const { active } = this.state

    return (
      <div>
        <Dimmer.Dimmable as={Segment} blurring dimmed={active}>
          <Dimmer active={active} inverted onClickOutside={this.handleHide} />

          <p>
            <Image src="/Assets/logo.jpg" size='medium'/>
          </p>

        </Dimmer.Dimmable>

      <Button animated>
      <Button.Content hidden>Search</Button.Content>
      <Button.Content visible>
        <Icon name='search' />
      </Button.Content>
     </Button>
      </div>
    )
  }
}
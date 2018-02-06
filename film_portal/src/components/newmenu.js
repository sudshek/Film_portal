import React, { Component } from 'react'
import { Input, Menu, Segment,Sticky } from 'semantic-ui-react'

export default class MenuExamplePointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu inverted>
          <Menu.Item name='Register' active={activeItem === 'Login'} onClick={this.handleItemClick} />
          <Menu.Item name='Notifications' active={activeItem === 'Shooting Permission'} onClick={this.handleItemClick} />
        </Menu>
        <Segment>
          <h4>"I ASKED MY SOUL:" WHAT IS DELHI? SHE REPLIED: THE WORLD IS THE BODY AND DELHI ITS LIFE....</h4>
        </Segment>
        <p>
              
        </p>
      </div>

    )
  }
}
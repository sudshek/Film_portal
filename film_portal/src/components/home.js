import React, { Component } from 'react'
import { Button} from 'semantic-ui-react'
import DimmerExampleBlurringInverted from './dimmer.js'
import MenuExampleBasic from './menu.js'


export default class Home extends Component {

  render() {
   

    return (
      <div>
          <MenuExampleBasic/>
      <DimmerExampleBlurringInverted/>
      </div>
    )
  }
}
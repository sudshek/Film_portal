import React, { Component } from 'react'
import { Image, Button, Grid, Segment} from 'semantic-ui-react'
import DimmerExampleBlurringInverted from './dimmer.js'
import MenuBar from './menu.js'
import SearchBar from './search.js'

export default class Home extends Component {

  render() {
   

    return (
      <div>
      <div style={{position:'static', top:0}}><MenuBar style={{opacity:0.5}} place="CP"/></div>
 <div style={{position:'relative'}}>
  <Image src='/assets/header.jpg' size='large' float='right'    style={{ position:"absolute", width:'100%', height:'600px',  top:0}}/>
  <div style={{position:'absolute', top:0}}> <Segment textAlign='center' back>
    <SearchBar/>
  </Segment>
   </div> </div>
    </div>
    )
  }
}  
import React, { Component } from 'react'
import { Image, Button} from 'semantic-ui-react'
import DimmerExampleBlurringInverted from './dimmer.js'
import MenuBar from './menu.js'
import SearchBar from './search.js'

export default class Home extends Component {

  render() {
   

    return (
      <div style={{position:'absolute',margin:"auto" }} spaced fluid>
      <div style={{position:'static', top:0}}><MenuBar style={{opacity:0.5}} /></div>
  <Image src='/assets/header.jpg' size='large' float='right'    style={{position:'relative',width:'100%', height:'600px', top:0}}/>
  <div style={{position:'absolute',  left:500, top:300}}> <SearchBar/></div>
     
   
    </div>
    )
  }
}
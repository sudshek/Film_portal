import React, { Component } from 'react'

import { Button, Form, Grid, Header, Icon, Image, Message, Segment, Label } from 'semantic-ui-react'

import imageObj from './Resources/login.jpg'
/*function bgImage() {
  const imageUrl = require(`./login.jpg`)
  return <div style={{ backgroundImage: `url(${imageUrl})` }} />
}*/
const RegistrationForm = () => (
  <div className='Registration-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 120%;
      }
    `}</style>

    <Grid
      textAlign='center'
      style={{backgroundImage: `url(${imageObj})`,
            height: '100%'}}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header size='huge'  color='black' textAlign='center'>
        <Icon name='user circle'/> {' '}
                      REGISTRATION FORM
        </Header>
        <Form size='large' size='massive'>
          <Segment stacked>
            
            <Form.Input
              fluid
              placeholder='FIRST NAME'
            />
            <Form.Input
              fluid
              placeholder='LAST NAME'
             />
            <Form.Input
              fluid
              placeholder='USER ID'
                         />
            <Form.Input
              fluid
              placeholder='EMAIL ID'
              
            />
            <Form.Input
              fluid
              placeholder='PASSWORD'
              type='password'
            />
            <Form.Input
              fluid
              placeholder='CONTACT'
              
            />
            <Form.Input
              fluid
              placeholder='ADDRESS LINE 1'
              
            />
            <Form.Input
              fluid
              placeholder='ADDRESS LINE 2'
              
            />
            <Form.Input
              fluid
              placeholder='CITY'
              
            />
            <Form.Input
              fluid
              placeholder='STATE'
              
            />
            <Form.Input
              fluid
              placeholder='PIN'
              
            />
            
            <Label size="massive" >
            {(Math.trunc((1000+((Math.random())*8999))))}
            </Label>
            <Message>
            Verification Code
            </Message>
            <Form.Input
              fluid
              placeholder='VERIFICATION CODE'
              
            />
            
            <Button color='red' fluid size='massive'>Register</Button>
          
          </Segment>
        </Form>
        
      </Grid.Column>
    </Grid>
  </div>
)

export default RegistrationForm

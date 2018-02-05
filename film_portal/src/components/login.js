import React, { Component } from 'react'

import { Button, Form, Grid, Header, Icon, Image, Message, Segment } from 'semantic-ui-react'

import imageObj from './Resources/login.jpg'
/*function bgImage() {
  const imageUrl = require(`./login.jpg`)
  return <div style={{ backgroundImage: `url(${imageUrl})` }} />
}*/
const LoginForm = () => (
  <div className='login-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>

    <Grid
      textAlign='center'
      style={{backgroundImage: `url(${imageObj})`,
            height: '105%'}}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header size='huge' as='h2' color='black' textAlign='center'>
        <Icon name='user circle'/> {' '}
                      LOG-IN PAGE
        </Header>
        <Form size='large' size='massive'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'

            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button color='blue' fluid size='large'>Login</Button>
          </Segment>
        </Form>
        <Message>
          <header size='big'>New to us? {' '} <a href='#'><Button secondary size='large'>Sign Up</Button></a></header>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default LoginForm

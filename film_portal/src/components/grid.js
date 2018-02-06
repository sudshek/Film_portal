import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const GridExampleCentered = () => (
  <Grid centered columns={2}>
    <Grid.Column>
      <Image src="/Assets/Humayuns-Tomb-Delhi-India.jpg"  fluid/>
    </Grid.Column>

    <Grid.Row centered columns={4}>
      <Grid.Column>
      <Image src="/Assets/Lotus-Tmple-Photo-by-Arpan-Das-980x614.jpg" />
      </Grid.Column>
      <Grid.Column>
      <Image src="/Assets/Qutab-Minar-3.jpg" size="medium"/>
      </Grid.Column>
      <Grid.Column>
      <Image src="/Assets/the-red-fort-delhi.jpg" size="medium"/>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row centered columns={4}>
      <Grid.Column>
      <Image src="/Assets/Akshardham-Tmple-Delhi.jpg" size="medium"/>
      </Grid.Column>
      <Grid.Column>
      <Image src="/Assets/GettyImages-123526940-57df8fcf3df78c9cce12238b.jpg" size="medium"/>
      </Grid.Column>
      <Grid.Column>
      <Image src="/Assets/19travel-rb3.jpg" size="medium"/>
      </Grid.Column>
      <Grid.Column>
      <Image src="/Assets/bangla-sahib-delhi.jpg" size="medium"/>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)
export default GridExampleCentered
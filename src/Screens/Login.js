import React from 'react'
import BtnSave from '../Components/Buttons/BtnSave';
import BtnCancel from '../Components/Buttons/BtnCancel';
import BtnBack from '../Components/Buttons/BtnBack';
import BtnInverter from '../Components/Buttons/BtnInverter';
import HeaderFashion from '../Components/Headers/HeaderFashion';
import Divider from '../Components/Divider/Divider';
import CardExampleGroups from '../Components/Cards/Card';
import { Grid, Header } from 'semantic-ui-react';

import "./Login.css";

function Login() {
  return (
    <div className="ui container">
      <HeaderFashion/>
      <Grid columns='equal' divided inverted padded>
        {/* <Grid.Row columns={2} > */}
        <Grid.Row>
          <Grid.Column className="buttons">
            <Header size='medium' className="text-white">Buttons</Header>
            <Header>
              <a href="https://react.semantic-ui.com/elements/button/"  rel='opener referrer'>
                https://react.semantic-ui.com/elements/button/
              </a>
            </Header>
            <Divider />            
              <BtnSave />
              <BtnCancel />
              <BtnBack />
              <BtnInverter />            
          </Grid.Column>
          <Grid.Column className="cards">
          <Header size='medium'>Cards</Header>
              <Header>
                <a href="https://react.semantic-ui.com/views/card/"  rel='opener referrer'>
                    https://react.semantic-ui.com/views/card/
                </a>
              </Header>  
              <Divider />          
              <CardExampleGroups />
          </Grid.Column> 
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Login;

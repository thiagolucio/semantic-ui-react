import React from 'react'
import BtnSave from '../Components/Buttons/BtnSave';
import BtnCancel from '../Components/Buttons/BtnCancel';
import BtnBack from '../Components/Buttons/BtnBack';
import HeaderFashion from '../Components/Headers/HeaderFashion';
import { Grid, Header } from 'semantic-ui-react';

function ShowCase() {
  return (
    <div className="ui container">
      <HeaderFashion/>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header size='medium'>Botões</Header>
            <div className="buttons">
              <BtnSave />
              <BtnCancel />
              <BtnBack />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default ShowCase;

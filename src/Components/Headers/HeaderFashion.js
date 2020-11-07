import React from 'react'
import { Header, Divider, Image } from 'semantic-ui-react'
import LogoHora from '../../assets/images/screenshot.png';
import './Headers.css';

const HeaderFashion = () => (
  <>
    <Header as='h2' icon textAlign='center' style={{marginTop: "6%"}}>
        <div className="content-header-logo">
            <Image
            src={LogoHora}
            as='a'
            size='small'
            className="img-header"
            href='https://horadigital.com.br/'
            target='_blank'
        />
        </div>        
      <Header.Content>SHOWCASE</Header.Content>
      <Divider inverted />
    </Header>
    
  </>
)

export default HeaderFashion;
import React from 'react'
import { Header, Divider, Image } from 'semantic-ui-react'
import Logo from '../../assets/images/logo.png';
import './Headers.css';

const HeaderFashion = () => (
  <>
    <Header as='h2' icon textAlign='center' style={{marginTop: "6%"}}>
        <div className="content-header-logo">
            <Image
            src={Logo}
            as='a'
            size='small'
            className="img-header App-logo"
            href='https://thiagolucio.com.br/'
            target='_blank'
        />
        </div>        
      <Header.Content>ReactJS with Semantic UI</Header.Content>
      <Divider inverted />
    </Header>
    
  </>
)

export default HeaderFashion;
import React from 'react'
import { Button, Card, Image, Icon, Segment } from 'semantic-ui-react';
import ImgLargeCard from '../../assets/images/matthew.png';
import ImgSmallWoman from '../../assets/images/molly.png';
import ImgSmallMen from '../../assets/images/steve.jpg';
import ImgSmallWomanJenny from '../../assets/images/jenny.jpg';

import './Card.css';

const CardExampleGroups = () => (
    <Segment>
        <Card>
            <Image src={ImgLargeCard} wrapped ui={false} />
            <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
            </Card.Content>
            <Card.Content extra><Icon name='user' /> 22 Friends</Card.Content>
        </Card>
        <Card.Group>      
            <Card>
            <Card.Content>
                <Image floated='right' size='mini' src={ImgSmallMen}/>
                <Card.Header>Steve Sanders</Card.Header>
                <Card.Meta>Friends of Elliot</Card.Meta>
                <Card.Description>Steve wants to add you to the group <strong>best friends</strong></Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                <Button basic color='green'>Approve</Button>
                <Button basic color='red'>Decline</Button>
                </div>
            </Card.Content>
            </Card>
            <Card>
            <Card.Content>
                <Image floated='right' size='mini' src={ImgSmallWoman}/>
                <Card.Header>Molly Thomas</Card.Header>
                <Card.Meta>New User</Card.Meta>
                <Card.Description>Molly wants to add you to the group <strong>musicians</strong></Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green'>Approve</Button>
                    <Button basic color='red'>Decline</Button>
                </div>
            </Card.Content>
            </Card>
            <Card>
            <Card.Content>
                <Image floated='right' size='mini' src={ImgSmallWomanJenny} />
                <Card.Header>Jenny Lawrence</Card.Header>
                <Card.Meta>New User</Card.Meta>
                <Card.Description>Jenny requested permission to view your contact details</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green'>Approve</Button>
                    <Button basic color='red'>Decline</Button>
                </div>
            </Card.Content>
            </Card>
        </Card.Group>
    </Segment>
   
)

export default CardExampleGroups
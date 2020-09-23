import React from 'react';


import {Container, 
        Description,
        Retweeted,
        RocketseatIcon,
        Body,
        Avatar,
        Content,
        Header,
        Dot,
        ImageContent,
        Icons,
        Status,
        CommentIcon,
        RetweetedIcon,
        LikeIcon

     } from './styles';

const Tweet:React.FC =()=>{
    return(
        <Container>
            <Retweeted>
                <RocketseatIcon> <img src='https://img.icons8.com/color/2x/yoda.png'/></RocketseatIcon>
                Você retweetou
            </Retweeted>
            <Body>
                <Avatar />
                
                <Content>
                    <Header>
                        <strong>Rocketseat</strong>
                        <span>@rocketseat</span>
                        <Dot/>
                        <time>27 de junho</time>
                    </Header>
                    <Description> Foguete não tem ré</Description>
                    <ImageContent />

                    <Icons>
                        <Status>
                            <CommentIcon/>
                            18
                        </Status>
                        <Status>
                            <RetweetedIcon/>
                            18
                        </Status>
                        <Status>
                            <LikeIcon/>
                            789
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    )
}

export default Tweet;
import React from 'react';

import ProfilePage from '../ProfilePage'
import { Container, Header, BackIcon, ProfileInfo, HomeIcon, SearchIcon,
BellIcon, EmailIcon, BottomMenu } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon/>
        </button>

        <ProfileInfo>
          <strong>Rudinei Costa</strong>
          <span>712 tweets</span>
        </ProfileInfo>
      </Header>
      <ProfilePage/>

      <BottomMenu>
        <HomeIcon/>
        <SearchIcon/>
        <BellIcon/>
        <EmailIcon/>
      </BottomMenu>
    </Container>
  )
}

export default Main;
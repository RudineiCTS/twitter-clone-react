import React from 'react';

import { Container,EditButton, Banner, Avatar,ProfileData,LocationIcon,CakeIcon,Followage } from './styles';
import Feed from '../Feed';
const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar/>
          </Banner>
          <ProfileData>
              <EditButton outlined> Editar perfil</EditButton>

              <h1>Rudinei Costa</h1>
              <h2>@Rudineicts</h2>

              <p>
                  Stundent and Developer
              </p>
              <ul>
                  <li>
                      <LocationIcon/>
                      São Paulo, Brasil
                  </li>
                  <li>
                      <CakeIcon/>
                      Nascido(a) em 11 de setembro 2000
                  </li>
              </ul>
              <Followage>
                 <span>
                    seguindo <strong>83</strong>
                 </span>
                <span>
                    <strong>972 </strong> seguidores
                </span>
              </Followage>
          </ProfileData>
          <Feed />
      </Container>
  )
}

export default ProfilePage;
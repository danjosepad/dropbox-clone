import React from 'react';
import styled from 'styled-components';

// Project imports 

import { 
  Container,
  HeaderWrapper, 
  DropboxLogo, 
  Navigation, 
  ForPeople,
  Account,
  ContentWrapper,
  Background,
  Content,
  AboutDropbox,
  DropboxAndOthers,
  TextContainer,
  StorageAndShare,
  DropboxAdvantages
} from './styles';
import { Image, LinkText, H3, H2, H1, Text } from '../../styles/fonts';
import { colors } from '../../styles/theme';
import HomeOrganized from '../../assets/home-producttour-organized.png';
// Page components

const SImage = styled(Image)`
  top: -20px;
`;
export default function Main() {
  return (
    <Container>
      <HeaderWrapper>
        <DropboxLogo>
          <Image 
            src="https://cfl.dropboxstatic.com/static/images/index/rebrand/logos/glyphs/glyph_french_vanilla.svg"
            alt="" 
            role="presentation"
          />
          <Image
            src="https://cfl.dropboxstatic.com/static/images/index/rebrand/logos/wordmarks/wordmark_white.svg"
            alt="" 
            role="presentation"
          />
        </DropboxLogo>
        <Navigation>
          <ForPeople>
            <LinkText>Para equipes</LinkText>
            <LinkText>Para pessoas físicas</LinkText>
          </ForPeople>

          <Account>
            <LinkText>Acessar</LinkText>
            <LinkText>Registrar-se</LinkText>
          </Account>
        </Navigation>
      </HeaderWrapper>

      <ContentWrapper>

        <Background color={colors.primary}>
          <Content>
            <AboutDropbox>
              <H3 color={colors.secondary}>Dropbox</H3>
              <H1 color={colors.secondary}>Concentre-se apenas no trabalho importante</H1>
              <Text>
                O Dropbox é o primeiro espaço de trabalho inteligente do mundo. 
                Reunimos todo o conteúdo da sua equipe, e vocês podem usar as 
                ferramentas que todos adoram. Além disso, ajudamos a diminuir a 
                bagunça dos arquivos, realçando o que mais importa.
              </Text>
            </AboutDropbox>
          </Content>
        </Background>

        <Background color={colors.secondary}>
          <Content>
            <DropboxAndOthers>
                <SImage
                  srcset="https://cfl.dropboxstatic.com/static/images/index/zeus/home-hero@2x-vfl9GE_2I.jpg 2x"
                  alt="Uma escrivaninha ou espaço de trabalho com pastas tradicionais para arquivamento e outros acessórios de escritório."
                  src="https://cfl.dropboxstatic.com/static/images/index/zeus/home-hero-vflMv-jgR.jpg"
                />
                <TextContainer>
                  <H3 color={colors.primary}>Diga adeus ao trabalho maçante</H3>
                  <Text color={colors.black}>
                  A maioria das “ferramentas de produtividade” interfere em seu 
                  fluxo de trabalho e atrapalha-o constantemente. Há uma forma mais 
                  moderna de trabalhar. O Dropbox ajuda as pessoas a se organizarem,
                  a manterem o foco e a permanecerem sincronizadas com suas equipes.
                  </Text>
                </TextContainer>
            </DropboxAndOthers>
          </Content>
        </Background>
        
        <Background color={colors.primary}>
          <Content>
            <StorageAndShare>
              <H2>Armazenamento e compartilhamento de arquivos são só o começo</H2>
              <Image src={HomeOrganized} />

              <DropboxAdvantages>
                Teste
              </DropboxAdvantages>
            </StorageAndShare>
          </Content>
        </Background>
      </ContentWrapper>
    </Container>
  );
}

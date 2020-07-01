import React from 'react';

import { 
  Container,
  HeaderWrapper, 
  DropboxLogo, 
  Navigation, 
  ForPeople,
  Account,
  ContentWrapper,
  Content,
  AboutDropbox,
  DropboxAndOthers 
} from './styles';
import { Image, LinkText, H3, H1, Text } from '../../styles/fonts';
import { colors } from '../../styles/theme';

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
        <AboutDropbox>
          <Content>
            <H3 color={colors.secondary}>Dropbox</H3>
            <H1 color={colors.secondary}>Concentre-se apenas no trabalho importante</H1>

            <Text>
              O Dropbox é o primeiro espaço de trabalho inteligente do mundo. 
              Reunimos todo o conteúdo da sua equipe, e vocês podem usar as 
              ferramentas que todos adoram. Além disso, ajudamos a diminuir a 
              bagunça dos arquivos, realçando o que mais importa.
            </Text>
          </Content>
        </AboutDropbox>

        <DropboxAndOthers>
          <Content>
            <Image
              srcset="https://cfl.dropboxstatic.com/static/images/index/zeus/home-hero@2x-vfl9GE_2I.jpg 2x"
              alt="Uma escrivaninha ou espaço de trabalho com pastas tradicionais para arquivamento e outros acessórios de escritório."
              src="https://cfl.dropboxstatic.com/static/images/index/zeus/home-hero-vflMv-jgR.jpg"
            />
          </Content>
        </DropboxAndOthers>
      </ContentWrapper>
      
    </Container>
  );
}

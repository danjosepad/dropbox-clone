import styled from 'styled-components';
//import { breakpoints } from '../../styles/breakpoints';
import { colors } from '../../styles/theme';

export const Container = styled.div`
  background: ${colors.primary};
  position: relative;
`;

export const Background = styled.div`
  background: ${({ color }) => color ? color : colors.primary};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1440px;
  min-height: 90px;
  padding: 0 60px;
  position: sticky;
  top: 0;
  background: ${colors.primary};
  
  & > * + * {
    margin-left: 30px;
  }
`;

export const DropboxLogo = styled.div`
  display: flex;
  flex: 1;
  & > * + * {
    margin-left: 6px;
  }
`;

export const Navigation = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const ForPeople = styled.div``;

export const Account = styled.div``;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  padding: 0 60px;
`;

export const AboutDropbox = styled.div`
  width: 40%;
`;
export const DropboxAndOthers = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
`;

export const TextContainer = styled.div`

`;

export const StorageAndShare = styled.div`
  width: 50%;
`;

export const DropboxAdvantages = styled.div`
  height: 500px;
  overflow-y: scroll;
`;
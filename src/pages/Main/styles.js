import styled from 'styled-components';
//import { breakpoints } from '../../styles/breakpoints';
import { colors } from '../../styles/theme';

export const Container = styled.div`
  background: ${colors.primary};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1440px;
  min-height: 90px;
  padding: 0 60px;

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
  max-width: 1440px;
  padding: 0 60px;
`;

export const AboutDropbox = styled.div`
  background: red;
  width: 40%;
`;
export const DropboxAndOthers = styled.div`
  background: ${colors.secondary};
`;
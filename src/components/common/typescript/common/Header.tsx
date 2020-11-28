import React from 'react';
import styled from 'styled-components';
import Text from './Text';
import Button from './Button';
import { useHistory } from 'react-router';
import { setLanguage } from '../state/Language';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as LanguageIcon } from '../icons/slovakia-flag.svg';
import defaultProfilePhoto from '../icons/default-profile-photo.jpg';
import Switch from './Switch';
import { setAdminView } from '../state/User';
import _ from 'lodash';

const Container = styled.header`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  height: ${({ theme }) => theme.heights.header};
  position: relative;
  display: flex;
  width: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
`;

const Logo = styled.div`
  cursor: pointer;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const LogoWrapper = styled.div`
  display: flex;
  margin-left: 20px;
  align-items: center;
  height: 100%;
`;

const ContentWrapper = styled.div`
  height: 100%;
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
`;

const Link = styled.div`
  cursor: pointer;
  height: 100%;
  color: ${({ theme }) => theme.colors.white};
  font-weight: normal;
  display: flex;
  align-items: center;
  margin-right: 42px;
`;

const LanguageSelector = styled.div`
  cursor: pointer;
  display: flex;
  margin: 0 16px;
`;

const ProfilePhoto = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  margin: 0 16px 0 24px;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
  }
`;

const Name = styled.div`
  margin-right: 16px;
  font-weight: 500;
`;

const SwitchContainer = styled.div`
  margin-left: 24px;
`;

const Header: React.FC = () => {
  const language = useSelector((state) => state.language);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const switchLanguage = () => {
    if (language.locale === 'en') {
      dispatch(setLanguage('sk'));
    } else {
      dispatch(setLanguage('en'));
    }
  };

  let links: string[] = [];
  let button = null;
  let fullName = null;
  let languageSelector = null;
  let profilePhoto = null;
  let adminViewSwitcher = null;

  switch (user.role) {
    case 'VISITOR':
      links = ['overviews', 'about_project', 'i_am_organizer'];
      button = (
        <Button primary={false} onClick={() => console.log('a')}>
          <Text tag="login" />
        </Button>
      );
      languageSelector = (
        <LanguageSelector onClick={switchLanguage}>
          <LanguageIcon />
        </LanguageSelector>
      );
      break;

    case 'USER':
      links = ['overviews', 'about_project', 'i_am_organizer'];
      fullName = <Name>{user.name + ' ' + user.surname}</Name>;
      button = (
        <Button primary={true} onClick={() => console.log('a')}>
          <Text tag="my_board" />
        </Button>
      );
      profilePhoto = (
        <ProfilePhoto>
          <img src={user.profilePhoto || defaultProfilePhoto} alt="User profile" />
        </ProfilePhoto>
      );
      break;

    case 'ADMIN':
      if (!user.adminView) {
        links = ['overviews', 'about_project'];
        button = (
          <Button primary={true} onClick={() => console.log('a')}>
            <Text tag="my_board" />
          </Button>
        );
      }
      fullName = <Name>{user.name + ' ' + user.surname}</Name>;
      profilePhoto = (
        <ProfilePhoto>
          <img src={user.profilePhoto || defaultProfilePhoto} alt="User profile" />
        </ProfilePhoto>
      );
      adminViewSwitcher = (
        <SwitchContainer>
          <Switch
            leftLabel={<Text tag="admin" toUpper={true} />}
            rightLabel={<Text tag="racer" toUpper={true} />}
            state={user.adminView}
            onClick={() => dispatch(setAdminView(!user.adminView))}
          />
        </SwitchContainer>
      );
  }

  return (
    <Container>
      <LogoWrapper>
        <Logo onClick={() => history.push('/')}>Climbing Competitions</Logo>
      </LogoWrapper>
      <ContentWrapper>
        {_.map(links, (tag) => (
          <Link key={tag}>
            <Text tag={tag} />
          </Link>
        ))}
        {button}
        {adminViewSwitcher}
        {profilePhoto}
        {fullName}
        {languageSelector}
      </ContentWrapper>
    </Container>
  );
};

export default Header;

import React from 'react';
import styled from 'styled-components';
import Text from './Text';
import { ReactComponent as CardStateIcon } from '../icons/event-live-card-state.svg';
import { ReactComponent as CardUserIcon } from '../icons/event-live-card-users.svg';

const Container = styled.div`
  width: 100%;
  padding: 16px 16px 32px 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Live = styled.div`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: ${({ theme }) => theme.colors.red};
  font-weight: bold;
  line-height: 16px;
  padding: 3px 6px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.redLight};
  text-transform: uppercase;
  margin-bottom: 8px;

  &:before {
    content: '';
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.red};
    width: 12px;
    height: 12px;
    margin-right: 8px;
    border-radius: 50%;
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.red};
  }
`;

const EventName = styled.div`
  font-size: ${({ theme }) => theme.fontSize.big};
  color: ${({ theme }) => theme.colors.black};
  font-weight: normal;
  line-height: 24px;
`;

const Address = styled.div`
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: normal;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.gray};
`;

const OrganizationName = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: normal;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.gray};
`;

const Racer = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: normal;
  line-height: 34px;
  color: ${({ theme }) => theme.colors.black};
  text-transform: lowercase;
`;

const StyledIconUser = styled(CardUserIcon)`
  transform: scale(0.9);
  padding-right: 4px;
`;

const EventState = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: normal;
  line-height: 34px;
  color: ${({ theme }) => theme.colors.black};
`;

const EventStateValue = styled.span`
  display: inline-block;
  text-transform: capitalize;
  padding-left: 4px;
  font-weight: 500;
`;

const StyledIconMenu = styled(CardStateIcon)`
  transform: scale(0.9);
  padding-right: 4px;
`;

interface Props {
  eventName: string;
  organizationName: string;
  city: string;
  racerCount: number;
  eventState: string;
}

const EventLiveCard: React.FC<Props> = (props) => {
  const { eventName, organizationName, city, racerCount, eventState } = props;

  return (
    <Container>
      <Live>
        <Text tag="live" />
      </Live>
      <EventName>{eventName}</EventName>
      <Address>{city}</Address>
      <OrganizationName>{organizationName}</OrganizationName>
      <Racer>
        <StyledIconUser /> {racerCount} <Text tag="racer" count={racerCount} />
      </Racer>
      <EventState>
        <StyledIconMenu /> <Text tag="actual_state" /> <EventStateValue>{eventState}</EventStateValue>
      </EventState>
    </Container>
  );
};

export default EventLiveCard;

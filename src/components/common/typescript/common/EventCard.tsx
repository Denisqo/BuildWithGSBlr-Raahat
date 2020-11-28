import React from 'react';
import styled, { useTheme } from 'styled-components';
import { ReactComponent as Trophy } from '../icons/trophy.svg';
import Label from './Label';
import Text from './Text';

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  padding: 16px 24px;
  margin: 8px 0;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const GreenSquare = styled.div`
  display: flex;
  align-self: center;
  position: absolute;
  left: 0;
  width: 0;
  height: 0;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  border-left: 10px solid ${({ theme }) => theme.colors.green};
  border-radius: 2px;
`;

const AsideInformationWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  width: 52px;
`;

const StartDateEvent = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  font-weight: normal;
  line-height: 22px;
  letter-spacing: 0.5px;
  word-wrap: break-word;
  font-size: ${({ theme }) => theme.fontSize.big};
`;

const EventWrapper = styled.div`
  padding: 0 10px;
  flex-grow: 5;
`;

const EventName = styled.div`
  font-size: ${({ theme }) => theme.fontSize.big};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  line-height: 22px;
`;

const Address = styled.div`
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: normal;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.gray};
`;

const OrganizationName = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: normal;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.gray};
`;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 2;
`;

const ResultWrapper = styled.div`
  text-align: right;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  flex-grow: 2;
`;

const ResultHeader = styled.div`
  font-size: ${({ theme }) => theme.fontSize.extraSmall};
  color: ${({ theme }) => theme.colors.gray};
  letter-spacing: 1px;
  line-height: 120%;
  text-transform: uppercase;
`;

const Result = styled.div`
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.5px;
`;

interface Props {
  isChampionship: boolean;
  eventName: string;
  startDateEvent: Date;
  organizationName: string;
  country: string;
  raceState?: 'OPEN' | 'REGISTERED' | 'IN_PROGRESS' | 'FINISHED';
  city?: string;
  result?: number;
}

const EventCard: React.FC<Props> = (props) => {
  const { isChampionship, raceState, eventName, startDateEvent, organizationName, country, city, result } = props;

  const theme = useTheme();

  const asideInformation = isChampionship ? (
    <Trophy />
  ) : (
    <StartDateEvent>{`${startDateEvent.getDate()}.${
      +startDateEvent.getMonth() + 1
    } ${startDateEvent.getFullYear()}`}</StartDateEvent>
  );

  const formatAddress = () => {
    return city ? `${city}, ${country}` : country;
  };

  let label = undefined;

  switch (raceState) {
    case 'OPEN':
      label = (
        <Label backgroundColor={theme.colors.greenExtraLight} color={theme.colors.green}>
          <Text tag="open_registration" />
        </Label>
      );
      break;

    case 'REGISTERED':
      label = (
        <Label backgroundColor={theme.colors.green} color={theme.colors.white}>
          <Text tag="registered" />
        </Label>
      );
      break;

    case 'IN_PROGRESS':
      label = (
        <Label backgroundColor={theme.colors.greenExtraLight} color={theme.colors.green}>
          <Text tag="in_progress" />
        </Label>
      );
      break;

    case 'FINISHED':
      label = (
        <Label>
          <Text tag="finished" />
        </Label>
      );
      break;
  }

  return (
    <Container>
      {raceState === 'OPEN' && <GreenSquare />}

      <AsideInformationWrapper>{asideInformation}</AsideInformationWrapper>

      <EventWrapper>
        <EventName>{eventName}</EventName>
        <Address>{formatAddress()}</Address>
        <OrganizationName>{organizationName}</OrganizationName>
      </EventWrapper>

      {label && !result && <LabelWrapper>{label}</LabelWrapper>}
      {result && (
        <ResultWrapper>
          <ResultHeader>
            <Text tag="result" />
          </ResultHeader>
          <Result>
            {`${result}. `}
            <Text tag="place" />
          </Result>
        </ResultWrapper>
      )}
    </Container>
  );
};

export default EventCard;

import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import Button from '../common/Button';
import Text from '../common/Text';
import Label from '../common/Label';
import EventCard from '../common/EventCard';
import Sex from '../common/Sex';
import NavigationTab from '../common/NavigationTab';
import Header from '../common/Header';
import Checkbox from '../common/Checkbox';
import Switch from '../common/Switch';
import Footer from '../common/Footer';
import EventLiveCard from '../common/EventLiveCard';
import Pagination from '../common/Pagination';
import IconButton from '../common/IconButton';
import { ReactComponent as Trophy } from '../icons/trophy.svg';
import Select from '../common/Select';
import { ReactComponent as Male } from '../icons/male.svg';
import Input from '../common/Input';
import { ReactComponent as Lock } from '../icons/password-lock.svg';

const Container = styled.div`
  background: #e5e5e5;
  width: 100%;
`;

const Main = styled.main`
  min-height: calc(100vh - ${({ theme }) => theme.heights.footer} - ${({ theme }) => theme.heights.header});
  margin-top: ${({ theme }) => theme.heights.header};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  box-sizing: border-box;
`;

const Item = styled.div`
  margin-top: 20px;
`;

const SelectItem = styled(Item)`
  min-width: 260px;
`;

const Event = styled(Item)`
  min-width: 450px;
  width: 600px;
`;

const EventLive = styled(Item)`
  width: 300px;
`;

const InputItem = styled(Item)`
  width: 250px;
`;

const printTest = () => {
  console.log('Test.');
};

const Components: React.FC = (props: any) => {
  const [activeTab, setActiveTab] = useState(true);
  const [defaultTab, setDefaultTab] = useState(false);
  const [switchState, setSwitchState] = useState(true);
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState(false);
  const [page, setPage] = useState(0);
  const [selectedValue, setSelectedValue] = useState('');
  const [values] = useState(['Value', 'Value1', 'Value2']);
  const [inputValue, setInputValue] = useState('');
  const theme = useTheme();

  return (
    <Container>
      <Header />
      <Main>
        <Item>
          <Text tag="test" />
        </Item>
        <Item>
          <Button primary={true} onClick={printTest}>
            Primary Button
          </Button>
        </Item>
        <Item>
          <Button primary={false} onClick={printTest}>
            Secondary Button
          </Button>
        </Item>
        <Item>
          <Button primary={true} disabled={true}>
            Disabled Primary
          </Button>
        </Item>
        <Item>
          <Button primary={false} disabled={true}>
            Disabled Secondary
          </Button>
        </Item>
        <Item>
          <Label>Default Label</Label>
        </Item>
        <Item>
          <Label backgroundColor={theme.colors.greenTransparent} color={theme.colors.green}>
            Green color
          </Label>
        </Item>
        <Event>
          <EventCard
            country="Slovensko"
            eventName="Race 05 65"
            isChampionship={true}
            organizationName="SSH JAMES JUNIOR"
            startDateEvent={new Date('2020-12-12')}
            city="Bratislava"
          />
        </Event>
        <Event>
          <EventCard
            country="Slovensko"
            eventName="Super Race"
            isChampionship={false}
            organizationName="SSH JAMES JUNIOR"
            startDateEvent={new Date('2020-06-15')}
            city="Bratislava"
            raceState="OPEN"
          />
        </Event>
        <Event>
          <EventCard
            country="Slovensko"
            eventName="Super Race"
            isChampionship={false}
            organizationName="SSH JAMES JUNIOR"
            startDateEvent={new Date('2020-06-15')}
            city="Bratislava"
            raceState="OPEN"
            result={1}
          />
        </Event>
        <Item>
          <Sex sex="M" />
        </Item>
        <Item>
          <Sex sex="F" />
        </Item>
        <Item>
          <NavigationTab active={activeTab} onClick={() => setActiveTab(!activeTab)}>
            Active tab
          </NavigationTab>
        </Item>
        <Item>
          <NavigationTab active={defaultTab} onClick={() => setDefaultTab(!defaultTab)}>
            Default tab
          </NavigationTab>
        </Item>
        <Item>
          <Checkbox checked={checked} onClick={() => setChecked(!checked)}>
            Note
          </Checkbox>
        </Item>
        <Item>
          <Checkbox checked={value} onClick={() => setValue(!value)} disabled={true} />
        </Item>
        <Item>
          <Switch
            leftLabel={<Text tag="admin" toUpper={true} />}
            rightLabel={<Text tag="racer" toUpper={true} />}
            state={switchState}
            onClick={() => setSwitchState(!switchState)}
          />
        </Item>
        <EventLive>
          <EventLiveCard
            eventName="Bouldering Festival Cup, SP dospelých a mládeže, preteky kategórie C Poprad"
            organizationName="Slovenský horolezecký spolok JAMES"
            city="Poprad"
            racerCount={50}
            eventState="Semifinále"
          />
        </EventLive>
        <Item>
          <Pagination page={page} setPage={(n) => setPage(n)} count={15} max={5} />
        </Item>
        <Item>
          <IconButton Icon={<Trophy />} onClick={() => console.log('Im work')} disabled={true} />
        </Item>
        <Item>
          <IconButton Icon={<Trophy />} onClick={() => console.log('Im work')} disabled={false} />
        </Item>
        <SelectItem>
          <Select
            label="Select with values"
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            readOnly={false}
            values={values}
          />
        </SelectItem>
        <SelectItem>
          <Select
            label="Select with caption"
            selectedValue="Value"
            setSelectedValue={() => {}}
            readOnly={false}
            caption="Caption"
          />
        </SelectItem>
        <SelectItem>
          <Select label="Disabled select" selectedValue="Value" setSelectedValue={() => {}} readOnly={false} />
        </SelectItem>
        <SelectItem>
          <Select label="Read only select" selectedValue="Value" setSelectedValue={() => {}} readOnly={true} />
        </SelectItem>
        <SelectItem>
          <Select label="Select without selected value" selectedValue="" setSelectedValue={() => {}} readOnly={false} />
        </SelectItem>
        <SelectItem>
          <Select
            label="Select with error"
            selectedValue="Value"
            setSelectedValue={() => {}}
            readOnly={false}
            error="Error"
          />
        </SelectItem>
        <SelectItem>
          <Select
            label="Select with icon"
            selectedValue="Value"
            setSelectedValue={() => {}}
            readOnly={false}
            Icon={<Male />}
          />
        </SelectItem>
        <InputItem>
          <Input label="Email" required={true} value={inputValue} setValue={setInputValue} />
        </InputItem>
        <InputItem>
          <Input label="Password" type="password" value={inputValue} setValue={setInputValue} Icon={Lock} />
        </InputItem>
        <InputItem>
          <Input label="Birth date" type="date" value={inputValue} setValue={setInputValue} />
        </InputItem>
      </Main>
      <Footer />
    </Container>
  );
};

export default Components;

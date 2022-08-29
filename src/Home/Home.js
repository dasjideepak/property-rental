import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';
import ImageLinks from '../utils/ImagesLinks';
import styles from './Home.styles';

import MainContainer from '../components/layout/MainContainer';
import Header from '../components/Header';
import ActionButtons from '../components/ActionButtons';
import InputBox from '../components/InputBox';
import Heading from '../components/Heading';
import Cards from '../components/Cards';
import {
  bedroomSizes,
  categories,
  occupancyStatuses,
  ownerType,
  propertyTypes,
  RENTING_AS,
} from '../utils/enums';
import Stack from '../components/Stack';

export default function Home() {
  const [category, setCategory] = useState('');
  const [rentingAs, setRentingAs] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [ownership, setOwnership] = useState('');
  const [occupancyStatus, setOccupancyStatus] = useState('');
  const [bedroomSize, setBedroomSize] = useState('');
  const [location, setLocation] = useState('');
  const [projectOrSocietyName, setProjectOrSocietyName] = useState('');
  const [plotArea, setPlotArea] = useState('');
  const [builtUpArea, setBuiltUpArea] = useState('');
  const [expectedMonthlyRental, setExpectedMonthlyRental] = useState('');
  const [currentPropertyValue, setCurrentPropertyValue] = useState('');
  const [securityDeposit, setSecurityDeposit] = useState(9);
  const [savePropertyAs, setSavePropertyAs] = useState('');

  useEffect(() => {
    setPropertyType('');
  }, [category]);

  return (
    <MainContainer topMargin={0}>
      <ScrollView>
        <Header />
        <Cards
          heading={'Select category'}
          data={categories}
          activeCard={category}
          setActiveCard={setCategory}
        />
        <Stack
          heading={'Renting as'}
          data={[RENTING_AS.TENANT, RENTING_AS.OWNER]}
          activeItem={rentingAs}
          setActiveItem={setRentingAs}
        />
        <Cards
          heading={'Property type*'}
          data={propertyTypes[category]}
          activeCard={propertyType}
          setActiveCard={setPropertyType}
        />
        <Stack
          heading={'Ownership'}
          data={ownerType}
          activeItem={ownership}
          setActiveItem={setOwnership}
        />
        <Stack
          heading={'Occupancy status'}
          data={occupancyStatuses}
          activeItem={occupancyStatus}
          setActiveItem={setOccupancyStatus}
        />
        <Stack
          heading={'Property type*'}
          data={propertyTypes[category]?.map(property => property.name)}
          activeItem={propertyType}
          setActiveItem={setPropertyType}
        />
        <Stack
          heading={'Bedrooms'}
          data={bedroomSizes}
          activeItem={bedroomSize}
          setActiveItem={setBedroomSize}
        />
        <View>
          <Heading label="Location*" />
          <InputBox
            icon={ImageLinks.searchIcon}
            placeholder="Search location"
            value={location}
            onChangeText={setLocation}
          />
        </View>
        <View>
          <Heading label="Project/Society name" />
          <InputBox
            placeholder="Enter project/Society name"
            value={projectOrSocietyName}
            onChangeText={setProjectOrSocietyName}
          />
        </View>
        <View>
          <Heading label="Plot area (sq.ft))" />
          <InputBox
            placeholder="0 sq.ft"
            value={plotArea}
            onChangeText={setPlotArea}
          />
        </View>
        <View>
          <Heading label="Built-up area (sq.ft)" />
          <InputBox
            placeholder="0 sq.ft"
            value={builtUpArea}
            onChangeText={setBuiltUpArea}
          />
        </View>
        <View>
          <Heading label="Expected monthly rental" />
          <InputBox
            placeholder="Enter monthly rental value"
            value={expectedMonthlyRental}
            onChangeText={setExpectedMonthlyRental}
          />
        </View>
        <View>
          <Heading label="Current property value" />
          <InputBox
            placeholder="Enter current property value"
            value={currentPropertyValue}
            onChangeText={setCurrentPropertyValue}
          />
        </View>
        <View>
          <Heading label="Security deposit" />
          <Slider
            value={securityDeposit}
            onValueChange={setSecurityDeposit}
            minimumValue={1}
            maximumValue={12}
            step={0}
            thumbTintColor="#0A3A67"
            minimumTrackTintColor="#0A3A67"
            maximumTrackTintColor="#FFF"
          />
        </View>
        <View>
          <Heading label="Save property as" />
          <InputBox
            placeholder="Ex: Summer house"
            value={savePropertyAs}
            onChangeText={setSavePropertyAs}
          />
        </View>
        <View>
          <Text style={styles.disclaimer}>
            Provide full information on your property to get a more accurate
            rental valuation
          </Text>
        </View>
        <ActionButtons />
      </ScrollView>
    </MainContainer>
  );
}

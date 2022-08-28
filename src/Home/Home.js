import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import MainContainer from '../components/layout/MainContainer';
import Header from '../components/Header';
import SelectCategory from '../components/SelectCategory';
import RentingAs from '../components/RentingAs';
import PropertyType from '../components/PropertyType';
import ActionButtons from '../components/ActionButtons';
import Ownership from '../components/Ownership';
import OccupancyStatus from '../components/OccupancyStatus';
import Bedrooms from '../components/Bedrooms';
import PropertyTypeTabs from '../components/PropertyTypeTabs';

export default function Home() {
  const [category, setCategory] = useState('');
  const [rentingAs, setRentingAs] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [showPropertyTypes, setShowPropertyTypes] = useState(false);
  const [ownership, setOwnership] = useState('');
  const [occupancyStatus, setOccupancyStatus] = useState('');
  const [bedroomSize, setBedroomSize] = useState('');

  useEffect(() => {
    if (category) {
      setShowPropertyTypes(true);
    }
    setPropertyType('');
  }, [category]);

  useEffect(() => {
    setPropertyType('');
  }, [showPropertyTypes]);

  return (
    <MainContainer topMargin={0}>
      <ScrollView>
        <Header />
        <SelectCategory category={category} setCategory={setCategory} />
        <RentingAs rentingAs={rentingAs} setRentingAs={setRentingAs} />
        <Ownership ownership={ownership} setOwnership={setOwnership} />
        <OccupancyStatus
          occupancyStatus={occupancyStatus}
          setOccupancyStatus={setOccupancyStatus}
        />
        {!showPropertyTypes && category && (
          <PropertyTypeTabs
            category={category}
            propertyType={propertyType}
            setPropertyType={setPropertyType}
          />
        )}
        <Bedrooms bedroomSize={bedroomSize} setBedroomSize={setBedroomSize} />
        {showPropertyTypes && (
          <>
            <PropertyType
              category={category}
              propertyType={propertyType}
              setPropertyType={setPropertyType}
            />
            <ActionButtons setShowPropertyTypes={setShowPropertyTypes} />
          </>
        )}
      </ScrollView>
    </MainContainer>
  );
}

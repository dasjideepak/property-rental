import ImageLinks from './ImagesLinks';

export const categories = [
  {
    name: 'residential',
    image: ImageLinks.residentialProperty,
  },
  {
    name: 'commercial',
    image: ImageLinks.commercialProperty,
  },
];

export const RENTING_AS = {
  TENANT: 'Tenant',
  OWNER: 'Owner',
};

export const propertyTypes = {
  residential: [
    {
      name: 'Villa/Villament',
      image: ImageLinks.villa,
    },
    {
      name: 'Apartment',
      image: ImageLinks.apartment,
    },
    {
      name: 'Independent house',
      image: ImageLinks.independentHouse,
    },
    {
      name: 'Penthouse',
      image: ImageLinks.penthouse,
    },
    {
      name: 'Studio apartment',
      image: ImageLinks.studioApartment,
    },
    {
      name: 'Row house',
      image: ImageLinks.rowHouse,
    },
    {
      name: 'Plot',
      image: ImageLinks.plot,
    },
  ],
  commercial: [
    {
      name: 'Office space',
      image: ImageLinks.officeSpace,
    },
    {
      name: 'Commercial studio',
      image: ImageLinks.commercialStudio,
    },
    {
      name: 'Shop',
      image: ImageLinks.shop,
    },
    {
      name: 'Warehouse',
      image: ImageLinks.warehouse,
    },
    {
      name: 'Plot',
      image: ImageLinks.plot,
    },
    {
      name: 'Showroom',
      image: ImageLinks.showroom,
    },
  ],
};

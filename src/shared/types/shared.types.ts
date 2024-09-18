type Id = {
  id: number;
};

type Geolocation = {
  lat: string;
  lng: string;
};

type AddressBase = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

type AddressGeolocation = {
  geo: Geolocation;
};

type Address = AddressBase & AddressGeolocation;

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type { Id, Address, Company };

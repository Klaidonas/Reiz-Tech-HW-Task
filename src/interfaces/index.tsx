export type ICountryData = {
  name: string,
  region: string,
  area: number,
  independence: boolean,
};

export type Props = {
  country: ICountryData,
  countries: ICountryData[]
}

export type IDATA = {
  data: ICountryData[],
  error: string,
}

export type ISort = {
  sorted: ICountryData[],
  newOrder: string
}

export type IPagination = {
  countriesPerPage: number,
  totalCountries: number,
  paginate:Function
}
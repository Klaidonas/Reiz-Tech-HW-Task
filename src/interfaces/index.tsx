export type ICountryData = {
  toLowerCase(): ICountryData;
  name: string,
  region: string,
  area: number,
  independence: boolean,
};

export type IDATA = {
  data: ICountryData[],
  error: string,
}
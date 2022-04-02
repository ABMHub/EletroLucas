import { SvgXml } from 'react-native-svg';

export function Banheiro({width, height}) {
  return(
  <SvgXml
    xml={
      `
      <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M81.7 31.6829H21.5V18.6151C21.5 14.1022 24.4154 9.91078 28.6423 9.1775C29.8769 8.95634 31.1426 9.02129 32.3509 9.3678C33.5593 9.71431 34.6813 10.334 35.6388 11.1838C36.5963 12.0336 37.3662 13.093 37.8949 14.2881C38.4236 15.4832 38.6984 16.7853 38.7 18.1036H47.3C47.2979 15.5747 46.793 13.0742 45.8176 10.7631C44.8423 8.45199 43.4181 6.38138 41.6368 4.68449C39.8555 2.98761 37.7565 1.70203 35.4748 0.910466C33.1931 0.118904 30.7793 -0.161113 28.3886 0.0884314C19.4489 1.00277 12.9 9.45361 12.9 18.9093V31.6829H4.3C3.15957 31.6829 2.06585 32.1598 1.25944 33.0086C0.453034 33.8575 0 35.0088 0 36.2093V45.2622C0 57.058 7.1982 67.0931 17.2 70.8365V86H25.8V72.4207H60.2V86H68.8V70.8365C78.8018 67.0931 86 57.058 86 45.2622V36.2093C86 35.0088 85.547 33.8575 84.7406 33.0086C83.9342 32.1598 82.8404 31.6829 81.7 31.6829Z" fill="#8C17D5"/>
      </svg>
      `
    }
    width={width}
    height={height}
  />
  )
}
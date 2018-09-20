import styled from 'styled-components';

export const MainTitle = styled.div`
  font-weight: bold;
  color: #333333;
  font-family: 'Open Sans', OpenSans, system, -apple-system, system-ui, Roboto, Arial, FreeSans,
    sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  text-align: left;
  line-height: 22px;
`;

export const DealContainer = styled.span`
  display: grid;
  grid-template-rows: 200px;
  grid-template-columns: 225px 225px 225px 225px 225px 225px 225px 225px 225px 225px;
  border: 2px black;
  grid-gap: 20px;
  overflow-x: scroll;
  height: 300px;
`;

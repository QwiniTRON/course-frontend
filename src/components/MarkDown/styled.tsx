import styled from 'styled-components';

export const MarkDownContainer = styled.div`
  p {
    font-size: 18px;
    margin-bottom: 15px;
  }

  h1 {
    font-size: 36px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
  }

  h3 {
    font-size: 24px;
    font-weight: 400;
  }

  h4 {
    font-size: 24px;
    font-weight: 400;
  }

  h5 {
    font-size: 24px;
    font-weight: 400;
  }

  li {
    font-size: 18px;
  }

  img {
    max-width: 100%;
    margin: 10px auto;
    display: block;
  }

  a {
    font-size: 18px;
    color: ${p => p.theme.palette.secondary.main};
    text-decoration: underline;
  }

  ul li::marker {
    color: ${p => p.theme.palette.primary.main};
  }

  table {
    border-collapse: separate;
    border-spacing: 0;
    margin: 10px auto;
  }
  
  thead {
    vertical-align: middle;
  }
  
  tbody {
   vertical-align: middle;
  }
  
  tfoot {
    vertical-align: middle;
  }
  
  tr {
    display: table-row;
    vertical-align: middle;
  }
  
  td {
    border-bottom: 1px solid var(--accentColor);
    padding: .5em 1em;
    text-align: center;
    vertical-align: top;
    border-style: solid;
    border-color: rgba(0,0,0,.1);
    border-width: 0 0 1px;
    font-size: 18px;
  }
  
  th {
    border-bottom: 2px solid var(--accentColor);
    font-size: 24px;
  }
  
  tfoot td{
    border-bottom: 2px solid var(--accentColor);
  }
`;
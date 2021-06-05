import styled from 'styled-components';

export const MarkDownContainer = styled.div`
  padding: 0.5rem;

  p {
    font-size: 18px;
    margin: 0.5rem 0;
  }

  h1 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  h4 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  h5 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  li {
    font-size: 18px;
  }
  ul {
    padding-left: 1rem;
  }

  img, frame, iframe {
    max-width: 100%;
    margin: 10px auto;
    display: block;
  }

  a {
    font-size: 18px;
    color: ${p => p.theme.palette.primary.main};
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

  img + em { 
    display: block;
    text-align: center;
  }
  
  th {
    border-bottom: 2px solid var(--accentColor);
    font-size: 24px;
  }
  
  tfoot td{
    border-bottom: 2px solid var(--accentColor);
  }

  code {
    font-family: 'Courier New', Courier, monospace;
    display: block;
    padding: 1rem;
    border-radius: 1rem;
    background-color: ${p => p.theme.palette.background.paper};
    word-break: break-all;
    word-wrap: break-word;
    width: 100%;
    max-width: 100%;
    white-space: pre-wrap;
    margin: 1rem 0;
  }
`;

import './App.css';
import styled from "styled-components";
import Header from './js/header/Header';
import Section from './section/Section';

function App() {
  return (
    <AppDiv>
    <Header />
    <Section />


    </AppDiv>
  );
}

export default App;

const AppDiv =styled.div`
margin: 0;
padding: 0;
box-sizing: border-box;
list-style: none;
text-decoration: none;
`

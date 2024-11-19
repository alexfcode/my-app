import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <div className="App">

      <Menu>
        <ul>
          <li><a href="">menu item 1</a></li>
          <li><a href="">menu item 2</a></li>
          <li><a href="">menu item 3</a></li>
        </ul>
      </Menu>

      <Box>
        <StyledBtn as={Link} href={"#"}>LinkComponent</StyledBtn>
        <StyledBtn>Hello</StyledBtn>
        <SupperButton>SupperButton</SupperButton>
      </Box>
      
    </div>
  );
}

export default App;

const StyledBtn = styled.button`
  border: none;
  background-color: #fb3f78;
  padding: 10px 20px;
  color: snow;
  font-size: 2rem;
  font-weight: bold;
&:hover {
  background-color: #59cbe7;
  transition: 0.2s;
}

&:last-child {
  background-color: #fbb93f;
}

`

const Link = styled.a`
  color: #2970a0;
  font-size: 2rem;
  font-weight: bold;
  padding: 0px;
  background-color: transparent;
  `

const SupperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: yellow;
  color: black

`

const Box = styled.div `
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
gap: 20px;

button {
  cursor: pointer;
}

${Link} {
  cursor: zoom-in;
}

`
const Menu = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;

    li > a {
      color: green;
    }

    li + li {
      margin-left: 20px;
    }
  }
`

;


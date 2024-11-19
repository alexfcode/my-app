import "./App.css";
import { StyledBtn } from "./components/Button.styled";
import { SupperButton } from "./components/Button.styled";
import { Link } from "./components/link.styled";
import { Menu } from "./components/Menu.styled";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Menu>
        <ul>
          <li>
            <a>menu item 1</a>
          </li>
          <li>
            <a>menu item 2</a>
          </li>
          <li>
            <a>menu item 3</a>
          </li>
        </ul>
      </Menu>

      <Box>
        <StyledBtn as={Link} href={"#"}>
          LinkComponent
        </StyledBtn>
        <StyledBtn>Hello</StyledBtn>
        <SupperButton>SupperButton</SupperButton>
      </Box>
    </div>
  );
}

export default App;



const Box = styled.div`
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
`;
;

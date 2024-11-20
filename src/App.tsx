import "./App.css";
import { StyledBtn } from "./components/Button.styled";
import { Link } from "./components/link.styled";
// import { Menu } from "./components/Menu.styled";
import styled from "styled-components";
import { myTheme } from "./styles/Theme.styled";

function App() {
  return (
    <div className="App">
      <Box>
        <StyledBtn color={myTheme.colors.primary} btnType="primary" active>Niger!!!!</StyledBtn>
        <StyledBtn color={myTheme.colors.secondary} btnType="outlined">Niger!!!!</StyledBtn>
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

  @media ${myTheme.media.tablet} {
    flex-direction: column;
  }
`;

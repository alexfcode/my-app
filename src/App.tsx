import "./App.css";
import { StyledBtn } from "./components/Button.styled";
import { Link } from "./components/link.styled";
// import { Menu } from "./components/Menu.styled";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Box>
        {/* <StyledBtn color="red" fontSize={"20px"}>
          Hello
        </StyledBtn>
        <StyledBtn color="green">Bye!</StyledBtn> */}
        {/* <StyledBtn fontSize={"30px"}>Niger!!!!</StyledBtn> */}
        <StyledBtn btnType="primary">Niger!!!!</StyledBtn>
        <StyledBtn btnType="outlined">Niger!!!!</StyledBtn>
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

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

import styled from "styled-components"

export const StyledBtn = styled.button`
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

export const SupperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: yellow;
  color: black;
`;
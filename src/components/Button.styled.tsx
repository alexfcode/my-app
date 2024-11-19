import styled, { css } from "styled-components";
import { MyAnimation } from "../styles/animations/animations";
import { isPropertySignature } from "typescript";

type StyledBtnPropsType = {
  color?: string;
  fontSize?: string;
  btnType?: "primary" | "outlined";
};

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: ${(props) => props.fontSize || "2rem"};
  font-weight: bold;

  //outlined
  ${(props) =>
    props.btnType === "outlined" &&
    css<StyledBtnPropsType>`
      border: 2px solid ${(props) => props.color || "#fb3f78"};
      color: ${(props) => props.color || "#fb3f78"};
      background-color: transparent;

      &:hover {
        border-color: #4053cc;
        color: #4053cc;
        background-color: transparent;
      }
    `}

  //primary
  ${(props) =>
    props.btnType === "primary" &&
    css<StyledBtnPropsType>`
      color: snow;
      background-color: ${(props) => props.color || "#fb3f78"};

      &:hover {
        background-color: #4053cc;
      }
    `}
`;

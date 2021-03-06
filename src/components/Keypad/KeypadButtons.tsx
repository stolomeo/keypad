import styled from "styled-components";
import { MouseEvent } from "react";

type Props = {
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
  value: string;
};

export default function KeypadButtons({ handleClick, value }: Props) {
  return <Button onClick={(e) => handleClick(e)}>{value}</Button>;
}

const Button = styled.button`
  width: 100%;
  font-size: 50px;
  background-color: white;
  &:hover {
    background-color: hsla(0, 0%, 100%, 0.828);
    cursor: pointer;
  }
`;

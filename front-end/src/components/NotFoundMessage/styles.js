import styled from "styled-components";
import { theme } from "../UI/Theme/theme";

export const MessageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 16rem; /* 256px */
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 1.5rem; /* 24px */
  font-weight: 600;
  color: ${theme.colors.primary};
`;

export const Text = styled.p`
  color: #6b6b6b;
  margin-top: 0.5rem;
`;

export const SubText = styled.p`
  color: #9b9b9b;
  margin-top: 0.5rem;
`;

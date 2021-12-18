import styled from 'styled-components';

import { Column } from 'ui/_styles/components/Column';

const Button = styled('button')`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: #fea501;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  gap: 0.5rem;
  justify-content: space-around;
  margin: 0;
  opacity: 0.85;
  overflow: visible;
  padding: 0.5rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.2s, box-shadow 0.2s, transform 0.1s ease-out;
  user-select: none;
  -moz-border-radius: 10px;
  -moz-transition: background-color 0.2s, box-shadow 0.2s;
  -moz-user-select: none;
  -o-transition: background-color 0.2s, box-shadow 0.2s;
  -webkit-border-radius: 10px;
  -webkit-transition: background-color 0.2s, box-shadow 0.2s;
  -webkit-user-select: none;

  &:active {
    transform: scale(0.97);
    transition: transform 0.1s ease-in;
  }

  &:hover {
    opacity: 1;
  }
`;

const Icon = styled('span')`
  align-items: center;
  display: flex;
  font-size: x-large;

  svg,
  img {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

const Label = styled('span')`
  font-size: large;
  line-height: normal;
`;

const Content = styled(Column)`
  margin-top: 5rem;
`;

export const Styles = { Button, Content, Icon, Label };

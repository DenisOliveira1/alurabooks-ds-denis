import React from 'react';
import styled from 'styled-components';

const BotaoEstilizado = styled.button`
  background: #eb9000;
  padding: 16px 32px;
  border: 2px solid #eb9000;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background: #887900;
    border: 2px solid #887900;
  }
`

export const AbBotao = () => {
  return <BotaoEstilizado>Clique Aqui!</BotaoEstilizado>;
};

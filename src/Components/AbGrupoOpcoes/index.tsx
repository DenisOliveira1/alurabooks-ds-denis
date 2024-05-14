import React, { useState } from 'react';
import styled from 'styled-components';

const SectionEstilizada = styled.section<{
  selecionado: boolean;
}>`
  width: 194;
  height: 88px;
  background: ${props => (props.selecionado ? 'lightblue' : '#fff')};
  border: 1px solid;
  border-color: ${props => (props.selecionado ? 'blue' : '#8b9b00')};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin: 10px;
  font-family: sans-serif;
  header {
    color: ${props => (props.selecionado ? '#fff' : '##eb9b00')};
    font-size: 12px;
    font-weight: 400;
  }
  strong {
    color: ${props => (props.selecionado ? '#fff' : '##eb9b00')};

    font-size: 16px;
    font-weight: 700;
  }
  footer {
    color: ${props => (props.selecionado ? '#fff' : 'rgba(0, 0, 0, 0.54)')};
  }
`;

export interface AbGrupoOpcao {
  id: number;
  titulo: String;
  corpo: string;
  rodape: string;
}

export interface AbGrupoOpcaoProps {
  opcoes: AbGrupoOpcao[];
  valorPadrao?: AbGrupoOpcao | null;
  onChange?: (opcao: AbGrupoOpcao) => void;
}

export const AbGrupoOpcao = ({ opcoes, onChange, valorPadrao }: AbGrupoOpcaoProps) => {
  
  const [selecao, setSelecao] = useState<AbGrupoOpcao | null>(valorPadrao ?? null);
  function aoSelecionar(opcao: any): void {
    setSelecao(opcao);
    if (onChange) {
      onChange(opcao);
    }
  }

  return (
    <>
      {opcoes.map(x => (
        <SectionEstilizada
          onClick={() => aoSelecionar(x)}
          selecionado={selecao?.id == x.id}
          key={x.id}
        >
          <header>{x.titulo}</header>
          <div>
            <strong>{x.corpo}</strong>
          </div>
          <footer>{x.rodape}</footer>
        </SectionEstilizada>
      ))}
    </>
  );
};

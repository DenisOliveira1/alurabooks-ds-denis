import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbGrupoOpcao, AbGrupoOpcaoProps } from '../src';

export default {
  title: 'Components/AbGrupoOpcoes',
} as ComponentMeta<typeof AbGrupoOpcao>;

const Template: ComponentStory<typeof AbGrupoOpcao> = args => (
  <AbGrupoOpcao {...args} />
);

export const Default = Template.bind({});

Default.args = {
  opcoes: [
    {
      titulo: 'Livro 1',
      corpo: 'R$ 10,00',
      id: 1,
      rodape: '.mob',
    },
    {
      titulo: 'Livro 2',
      corpo: 'R$ 20,00',
      id: 2,
      rodape: '.epub',
    },
    {
      titulo: 'Livro 3',
      corpo: 'R$ 30,00',
      id: 3,
      rodape: '.pdf',
    },
  ],
} as AbGrupoOpcaoProps;

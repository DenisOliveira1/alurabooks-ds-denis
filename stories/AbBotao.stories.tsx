import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbBotao, AbBotaoProps } from '../src';

export default {
  title: 'Components/AbBotao',
} as ComponentMeta<typeof AbBotao>;

const Template: ComponentStory<typeof AbBotao> = args => <AbBotao {...args} />;

export const Primario = Template.bind({});
export const Secundario = Template.bind({});

Primario.args = {
  texto: 'Primario',
  tipo: 'primario',
} as AbBotaoProps;

Secundario.args = {
  texto: 'Secundario',
  tipo: 'secundario',
} as AbBotaoProps;

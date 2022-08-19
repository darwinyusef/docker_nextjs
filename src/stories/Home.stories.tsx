import React from 'react';
import { ComponentMeta } from '@storybook/react';
import  Home from '../pages/index';

export default {
  title: 'Example/Home',
  component: Home,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Home>;

export const HomePage = () => <Home />
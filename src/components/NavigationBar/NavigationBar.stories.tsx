import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NavigationBar from './index'

export default {
  title: 'Example/NavigationBar',
  component: NavigationBar,
} as ComponentMeta<typeof NavigationBar>;

const Template: ComponentStory<typeof NavigationBar> = (args) => <NavigationBar />;
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'NavigationBar',
};




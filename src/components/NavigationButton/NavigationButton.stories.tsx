import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NavigationButton from './index'

export default {
  title: 'Example/NavigationButton',
  component: NavigationButton,
} as ComponentMeta<typeof NavigationButton>;

const Template: ComponentStory<typeof NavigationButton> = (args) => <NavigationButton content='home' route="home" />;
export const Example = Template.bind({});
Example.args = {
  content: "Home",
  route: "",
  // label: 'NavigationButton',
};




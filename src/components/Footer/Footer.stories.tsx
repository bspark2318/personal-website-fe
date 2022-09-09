import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Footer from './index'

export default {
  title: 'Example/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer />;
export const Example = Template.bind({});
Example.args = {
  content: "Footer",
  route: "",
  // label: 'NavigationButton',
};




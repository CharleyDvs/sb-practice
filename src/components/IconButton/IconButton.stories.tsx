import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { IconButton, ButtonProps } from './IconButton';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const voidClickHandler = () => {};

const helloworldClickHandler = () => {
    alert('Hello World!!!');
};

const goodbyeClickHandler = () => {
    alert('Goodbye World!!!');
};

const customHandlers = { voidClickHandler, helloworldClickHandler, goodbyeClickHandler };

export default {
    title: 'Components/IconButton',
    component: IconButton,
    argTypes: {
        className: {
            table: { disable: true }
        },
        onClick: {
            options: Object.keys(customHandlers),
            defaultValue: Object.keys(customHandlers)[0],
            mapping: customHandlers,
            control: {
                type: 'select',
                labels: {
                    voidClickHandler: 'No click handler',
                    helloworldClickHandler: 'Hello World',
                    goodbyeClickHandler: 'Goodbye World'
                }
            }
        }
    }
} as ComponentMeta<typeof IconButton>;

const Template: Story<ButtonProps> = (args) => <IconButton {...args} />;

export const Light = Template.bind({});
Light.args = {
    type: 'light',
    text: 'Light button'
};

export const Primary = Template.bind({});
Primary.args = {
    type: 'primary',
    text: 'Primary button'
};

export const Secondary = Template.bind({});
Secondary.args = {
    type: 'secondary',
    text: 'Secondary button'
};

export const Dark = Template.bind({});
Dark.args = {
    type: 'dark',
    text: 'Dark button'
};

export const Disabled = Template.bind({});
Disabled.args = {
    type: 'disabled',
    text: 'Disabled button'
};

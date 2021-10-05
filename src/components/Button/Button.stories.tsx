import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';

export default {
    title: 'Components/Button',
    component: Button
} as ComponentMeta<typeof Button>;

const clickHandler = () => {
    alert('Hello World!!!');
};

export const LightButton: ComponentStory<typeof Button> = () => <Button text='Basic button' onClick={clickHandler} />;
export const PrimaryButton: ComponentStory<typeof Button> = () => (
    <Button text='Primary button' type='primary' onClick={clickHandler} />
);
export const SecondaryButton: ComponentStory<typeof Button> = () => (
    <Button text='Secondary button' type='secondary' onClick={clickHandler} />
);
export const DarkButton: ComponentStory<typeof Button> = () => (
    <Button text='Dark button' type='dark' onClick={clickHandler} />
);
export const DisabledButton: ComponentStory<typeof Button> = () => (
    <Button text='Disabled button' type='disabled' onClick={clickHandler} />
);

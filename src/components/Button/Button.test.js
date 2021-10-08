// Button specific implementation
// Resources https://stackoverflow.com/questions/58408178/query-a-button-with-specific-text

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button works as expected', () => {
    it('Button displays the text provided', async () => {
        render(<Button text="Simple Test" />);
        screen.getByText('Simple Test', { selector: 'button' });
    });

    it('Disabled button can\'t be clicked', async () => {
        const buttonHandler = jest.fn();
        render(<Button type="disabled" text="Disabled" onClick={buttonHandler} />);
        fireEvent(
            screen.getByText('Disabled', { selector: 'button' }),
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            })
        );

        expect(buttonHandler).not.toBeCalled();
    });

    it('Enabled button can be clicked', async () => {
        const buttonHandler = jest.fn();
        render(<Button type="dark" text="button" onClick={buttonHandler} />);
        fireEvent(
            screen.getByText('button', { selector: 'button' }),
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            })
        );

        expect(buttonHandler).toBeCalled();
    });
});

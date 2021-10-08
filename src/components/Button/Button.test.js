// Button specific implementation
// Resources https://stackoverflow.com/questions/58408178/query-a-button-with-specific-text

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button works as expected', () => {
    it('Button displays the text provided', async () => {
        render(<Button text="Simple Test" />);
        screen.getByText(/simple test/i, { selector: 'button' });
    });

    it('Disabled button can\'t be clicked', async () => {
        let number = 0;
        const incrementer = () => number++;
        render(<Button type="disabled" text="Disabled" onClick={incrementer} />);
        fireEvent(
            screen.getByText(/disabled/i, { selector: 'button' }),
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            })
        );

        expect(number).toBe(0);
    });

    it('Enabled button can be clicked', async () => {
        let number = 0;
        const incrementer = () => number++;
        render(<Button type="dark" text="button" onClick={incrementer} />);
        fireEvent(
            screen.getByText(/button/i, { selector: 'button' }),
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            })
        );

        expect(number).toBe(1);
    });
});

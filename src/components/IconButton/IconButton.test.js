// Button specific implementation
// Resources https://stackoverflow.com/questions/58408178/query-a-button-with-specific-text

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { IconButton } from './IconButton';

// Due to the React Component using divs to space everything, we use the 'div' selector instead of the 'button'
// Refer to Button.test.js for example.

describe('IconButton works as expected', () => {
    it('IconButton displays the text provided', async () => {
        render(<IconButton text="Simple Test" />);
        screen.getByText(/simple test/i, { selector: 'div' });
    });

    it('Disabled button can\'t be clicked', async () => {
        let number = 0;
        const incrementer = () => number++;
        render(<IconButton type="disabled" text="Disabled" onClick={incrementer} />);
        fireEvent(
            screen.getByText(/disabled/i, { selector: 'div' }),
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
        render(<IconButton type="dark" text="button" onClick={incrementer} />);
        fireEvent(
            screen.getByText(/button/i, { selector: 'div' }),
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            })
        );

        expect(number).toBe(1);
    });
});

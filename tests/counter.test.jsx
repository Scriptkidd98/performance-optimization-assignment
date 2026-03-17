import { describe, test, expect, afterEach } from 'vitest';
import { increment } from '../src/hooks/add';
import { render, screen, cleanup } from '@testing-library/react';
import Counter from '../src/pages/Counter';
import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';
import Accordion from '../src/components/Accordion';

describe('increment function', () => {
    afterEach(() => {
        cleanup(); 
    });

    test('should return a value incremented by 1', () => {
        expect(increment(0)).toBe(1);
        expect(increment(5)).toBe(6);
    });

    test('component should render the count value', () => {
        render(<Counter/>);

        expect(screen.getByText('0')).toBeInTheDocument();
    });

    test('should increment the count value when the increment button is clicked', async () => {
        const user = userEvent.setup();
        render(<Counter/>);

        const incrementButton = screen.getByTestId('increment-button');
        await user.click(incrementButton);

        expect(screen.getByText('1')).toBeInTheDocument();  
    });

    test('is accordion accessible', () => {
        render (<Accordion/>);

        const accordionButton = screen.getByTestId('accordion-button');

        expect(accordionButton).toHaveAttribute('aria-expanded', 'false');

        expect(screen.getByRole('region')).toBeInTheDocument();
    });
});
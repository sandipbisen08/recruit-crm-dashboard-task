import { render, screen } from '@testing-library/react';
// import { describe, it, expect } from 'vitest';
import HelloWorld from './HelloWorld';

describe('HelloWorld Component', () => {
    it('renders correctly', () => {
        render(<HelloWorld />);
        expect(screen.getByText('Hello World')).toBeInTheDocument();
    });
    
    it('displays the correct message', () => {
        render(<HelloWorld message="Test Message" />);
        expect(screen.getByText('Test Message')).toBeInTheDocument();
    });
});
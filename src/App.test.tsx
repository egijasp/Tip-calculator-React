import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('should render', () => {
    render(<App />);
    expect(screen.queryByTestId('logo-svg')).toBeInTheDocument();
    expect(screen.queryByText('Bill')).toBeInTheDocument();
    expect(screen.queryByTestId('bill-input')).toBeInTheDocument();
    expect(screen.queryByText('Select Tip %')).toBeInTheDocument();
    expect(screen.queryByText('Number of People')).toBeInTheDocument();
    expect(screen.queryByTestId('people-count-input')).toBeInTheDocument();
    expect(screen.queryByPlaceholderText('Custom')).toBeInTheDocument();
    expect(screen.queryByTestId('custom-percent-input')).toBeInTheDocument();
    expect(screen.queryByText('5%')).toBeInTheDocument();
    expect(screen.queryByText('10%')).toBeInTheDocument();
    expect(screen.queryByText('15%')).toBeInTheDocument();
    expect(screen.queryByText('25%')).toBeInTheDocument();
    expect(screen.queryByText('50%')).toBeInTheDocument();
  });

  it('should be able to fill input fields', () => {
    render(<App />);

    const billInput = screen.getByTestId('bill-input');
    fireEvent.change(billInput, { target: { value: 100 } });
    expect(billInput).toHaveValue(100);

    const customPercentInput = screen.getByTestId('custom-percent-input');
    fireEvent.change(customPercentInput, { target: { value: 35 } });
    expect(customPercentInput).toHaveValue(35);

    const peopleCountInput = screen.getByTestId('people-count-input');
    fireEvent.change(peopleCountInput, { target: { value: 5 } });
    expect(peopleCountInput).toHaveValue(5);
  });

  it('should not be able write letters in input', () => {
    render(<App />);

    const billInput = screen.getByTestId('bill-input');
    fireEvent.change(billInput, { target: { value: 'aaa' } });
    expect(billInput).toHaveValue(null);

    const customPercentInput = screen.getByTestId('custom-percent-input');
    fireEvent.change(customPercentInput, { target: { value: 'aaa' } });
    expect(customPercentInput).toHaveValue(null);

    const peopleCountInput = screen.getByTestId('people-count-input');
    fireEvent.change(peopleCountInput, { target: { value: 'aaa' } });
    expect(peopleCountInput).toHaveValue(null);
  });

  it('should not be able write negative number', () => {
    render(<App />);

    const billInput = screen.getByTestId('bill-input');
    fireEvent.change(billInput, { target: { value: -5 } });
    expect(billInput).toHaveValue(null);

    const customPercentInput = screen.getByTestId('custom-percent-input');
    fireEvent.change(customPercentInput, { target: { value: -5 } });
    expect(customPercentInput).toHaveValue(null);

    const peopleCountInput = screen.getByTestId('people-count-input');
    fireEvent.change(peopleCountInput, { target: { value: -5 } });
    expect(peopleCountInput).toHaveValue(null);
  });
});

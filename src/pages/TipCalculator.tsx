import '../styles/TipCalculator.scss';
import { ChangeEvent, useEffect, useState } from 'react';
import ResultsBox from '../components/ResultsBox/ResultsBox';
import Input from '../components/Input/Input';
import percentList from '../data/percentList';
import Dollar from '../assets/icon-dollar.svg';
import Person from '../assets/icon-person.svg';

const initialValues = {
  bill: '',
  tipPercent: 0,
  customPercent: '',
  personCount: '',
};

const TipCalculator = () => {
  const [values, setValues] = useState(initialValues);
  const [totalTip, setTotalTip] = useState(0);
  const [totalBill, setTotalBill] = useState(0);
  const { bill } = values;
  const { tipPercent } = values;
  const { personCount } = values;
  const { customPercent } = values;

  useEffect(() => {
    if (bill !== '' && personCount !== '' && personCount !== '0') {
      const tipAmount = (Number(bill) * Number(tipPercent)) / 100;
      const tipAmountPerson = tipAmount / Number(personCount);
      const totalAmountPerson = (Number(bill) / Number(personCount)) + tipAmountPerson;
      setTotalTip(tipAmountPerson);
      setTotalBill(totalAmountPerson);
    }
  });

  useEffect(() => {
    if (customPercent !== '') {
      setValues({
        ...values,
        tipPercent: Number(customPercent),
      });
    }
  }, [customPercent]);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (+e.target.value >= 0) {
      const { value } = e.target;
      setValues({ ...values, [e.target.name]: +value });
    }
  };

  return (
    <div className="tipCalculator__container">
      <div className="tipCalculator">
        <div
          className="tipCalculator__form"
        >
          <span className="tipCalculator__label">
            Bill
          </span>
          <div className="tipCalculator__input-wrapper">
            <Input
              min="0"
              testId="bill-input"
              value={bill}
              onChange={changeHandler}
              type="number"
              name="bill"
              placeholder="0"
              className="tipCalculator__input"
            />
            <img className="tipCalculator__icon" src={Dollar} alt="dollar" />
          </div>
          <span className="tipCalculator__label">Select Tip %</span>
          <div className="tipCalculator__button-wrapper">
            {percentList.map((percent) => (
              <button
                key={percent}
                data-test-id="percent-button"
                className="tipCalculator__button"
                type="button"
                onClick={() => {
                  setValues({
                    ...values,
                    tipPercent: percent,
                  });
                }}
              >
                {`${percent}%`}
              </button>
            ))}
            <Input
              testId="custom-percent-input"
              className="tipCalculator__input tipCalculator__input--custom"
              value={customPercent}
              onChange={changeHandler}
              min="0"
              placeholder="Custom"
              type="number"
              name="customPercent"
            />
          </div>
          <div className="tipCalculator__label-wrapper">
            <span className="tipCalculator__label">Number of People</span>
            {(+personCount === 0 && personCount !== '') && (
              <span className="tipCalculator__error">Can`t be zero</span>
            )}
          </div>
          <div className="tipCalculator__input-wrapper">
            <Input
              testId="people-count-input"
              min="1"
              onChange={(e) => {
                changeHandler(e);
              }}
              value={personCount}
              name="personCount"
              type="number"
              placeholder="0"
              className="tipCalculator__input"
            />
            <img className="tipCalculator__icon" src={Person} alt="person" />
          </div>
        </div>
        <ResultsBox
          values={values}
          tipValue={totalTip}
          total={totalBill}
          clickHandler={() => {
            setValues(initialValues);
          }}
        />
      </div>
    </div>
  );
};

export default TipCalculator;

import './ResultsBox.scss';
import { FC } from 'react';

type Calculator = {
  bill: string,
  tipPercent: number,
  personCount: string,
}

type ResultBoxProps = {
  tipValue: number,
  total: number,
  values: Calculator,
  clickHandler: () => void,
}

const ResultsBox:FC<ResultBoxProps> = ({
  tipValue, total, values, clickHandler,
}) => {
  console.log(123);

  return (
    <div className="resultsBox">
      <div>
        <span className="resultsBox__text left">
          Tip amount
        </span>
        <br />
        <span>/ person</span>
      </div>
      <div className="resultsBox__result right">
        $
        {tipValue.toFixed(2) === 'NaN' || +values.personCount === 0 ? '0.00' : tipValue.toFixed(2)}
      </div>
      <div>
        <span className="resultsBox__text left">
          Total
        </span>
        <br />
        <span>/ person</span>
      </div>
      <div className="resultsBox__result right">
        $
        {total.toFixed(2) === 'NaN' || +values.personCount === 0 ? '0.00' : total.toFixed(2)}
      </div>
      <div className="resultsBox__button-wrapper">
        <button
          className="resultsBox__button"
          onClick={clickHandler}
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default ResultsBox;

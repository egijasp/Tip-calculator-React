import './ResultsBox.scss';
import { FC } from 'react';
import { BillCalculator } from '../../helpers/type';

type ResultBoxProps = {
  tipValue: number,
  total: number,
  values: BillCalculator,
  clickHandler: () => void,
}

const ResultsBox:FC<ResultBoxProps> = ({
  tipValue, total, values, clickHandler,
}) => (
  <div className="resultsBox">
    <div>
      <span className="resultsBox__text">
        Tip amount
      </span>
      <br />
      <span className="resultsBox__person">
        / person
      </span>
    </div>
    <div className="resultsBox__result resultsBox__result--right">
      $
      {tipValue.toFixed(2) === 'NaN' || +values.personCount === 0 ? '0.00' : tipValue.toFixed(2)}
    </div>
    <div>
      <span className="resultsBox__text">
        Total
      </span>
      <br />
      <span className="resultsBox__person">
        / person
      </span>
    </div>
    <div className="resultsBox__result resultsBox__result--right">
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

export default ResultsBox;

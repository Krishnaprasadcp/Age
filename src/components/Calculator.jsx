import { Fragment } from "react";

const Calculator = () => {
  return (
    <Fragment>
      <div>
        <div>
          <form action="" method="post">
            <div>
              <label htmlFor="day">Day</label>
              <input type="text" name="day" id="day" />
            </div>
            <div>
              <label htmlFor="month">Month</label>
              <input type="text" name="month" id="month" />
            </div>
            <div>
              <label htmlFor="year">Month</label>
              <input type="text" name="year" id="year" />
            </div>
            
          </form>
        </div>
      </div>
    </Fragment>
  );
};
export default Calculator;

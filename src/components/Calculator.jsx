import { Fragment, useState } from "react";
import arrow from "../images/icon-arrow.svg";
const Calculator = () => {
    const [day,setDay] = useState();
    const [month,setMonth] = useState();
    const [year,setYear] = useState();

    const formSubmitHandler=(event)=>{
        event.preventDefault();
        console.log(day);
        console.log(month);
    }

    const dayInputHandler=(event)=>{
        setDay(event.target.value);
    };

    const monthChangeHandler=(event)=>{
        setMonth(event.target.value);
    };

    const yearChangeHandler =(event)=>{
        setYear(event.target.value);
    };
  return (
    <Fragment>
      <div className="bg-white mt-20 mx-4 mainborder overflow-x-hidden ">
        <div className="p-10 ">
          <form onSubmit={formSubmitHandler}>
            <div className="flex flex-row w-full justify-between ">
              <div className="inputdiv">
                <label htmlFor="day" className="">
                  Day
                </label>
                <input className="inputs" type="text" onChange={dayInputHandler} name="day" id="day" placeholder="DD"/>
              </div>
              <div className="inputdiv">
                <label htmlFor="month">Month</label>
                <input className="inputs" type="text" onChange={monthChangeHandler} name="month" id="month" placeholder="MM" />
              </div>
              <div className="inputdiv">
                <label htmlFor="year">Year</label>
                <input className="inputs" type="text" onChange={yearChangeHandler} name="year" id="year" placeholder="YYYY" />
              </div>
            </div>
            <div className="border-t-2 border-gray-400  mt-24 ">
                <div className="relative inset-x-2/4 -inset-y-10 -ml-10 sm:relative sm:left-full ">
                <button type="submit" className="bg-violet-500 p-5 rounded-full sm:p-4"><img src={arrow} alt="arrowbutton" /></button>
                
                </div>
                
            </div>
          </form>
        </div>

        <div className="pb-9 ml-10">
          <p className="results"><span className="text-violet-500">38</span> YEARS</p>
          <p className="results"><span className="text-violet-500">38</span> Months</p>
          <p className="results"><span className="text-violet-500">38</span> Days</p>
        </div>
      </div>
    </Fragment>
  );
};
export default Calculator;

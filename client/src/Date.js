import React, { useState } from "react";
import DatetimeRangePicker from "react-datetime-range-picker";
import fetchHook from "./FetchHook";

const Date = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");


  const handleButtonClick = () => {
    fetchHook([startDate, endDate]);
  };

  function onChange(dates, dateStrings) {
    setStartDate(dates.start)
    setEndDate(dates.end)
  }

  console.log(startDate, endDate)
  return (
    <div>
      <DatetimeRangePicker onChange={(e) => onChange(e)}/>
      <button onClick={handleButtonClick}>Submit</button>
    </div>
  );
};

export default Date;

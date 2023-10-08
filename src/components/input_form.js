import React from "react";

const input_form = ({ datestring, setinput, inputsubmit }) => {
  return (
    <div className="Display">
      <div className="date">{datestring}</div>
      <div className="appointmentForm">
        <form className="InputForm">
          <div className="inputLabel">
            <label>Title</label>
            <input name="title" type="string" onChange={setinput} />
          </div>
          <div className="inputLabel">
            <label>Start Time</label>
            <input name="startTime" type="time" onChange={setinput} />
          </div>
          <div className="inputLabel">
            <label>End Time</label>
            <input name="endTime" type="time" onChange={setinput} />
          </div>
          <input
            className="SubmitButton"
            type="button"
            onClick={inputsubmit}
            value="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default input_form;

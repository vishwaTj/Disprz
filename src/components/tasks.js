import React from "react";
import trash from "../images/delete.png";

const tasks = ({ list, datestring, deletetask }) => {
  return (
    <div className="Display">
      <div className="date">{datestring}</div>
      <div className="appointmentList">
        {list.map((el, i) => {
          return (
            <div className={el.title ? "appointment" : "dotted"} key={i}>
              <div className="time">
                {el.time < 12 ? el.time + " AM" : el.time + " PM"}
              </div>{" "}
              <div className="title">{el.title} </div>
              {el.title !== "" ? (
                <div>
                  <img
                    onClick={deletetask}
                    className="trash"
                    src={trash}
                    alt="trash"
                  />
                </div>
              ) : (
                <div></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default tasks;

import { useEffect, useState } from "react";
import "./App.css";

import rightArraow from "./images/right-arrow.png";
import LeftArraow from "./images/left-arrow.png";
import add from "./images/add.png";

function App() {
  const [list, setList] = useState([
    { title: "qa testing", time: 9 },
    { title: "code developemnt", time: 10 },
    { title: "openapi spec", time: 11 },
  ]);

  const [currentDate, setCurrentDate] = useState(new Date());

  const [DateString, setDateString] = useState("");

  const [appointment, setAppointment] = useState({
    title: "",
    startTime: "",
    endTime: "",
  });

  useEffect(() => {
    let month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    let date = currentDate.getDate();
    // let date = currentDate.getDate();
    let year = currentDate.getFullYear();
    setDateString(date + "-" + month + "-" + year);
  }, [currentDate]);

  const [flag, setflag] = useState(false);

  const setInput = (e) => {
    if (e.target.name === "startTime") {
      setAppointment({ ...appointment, startTime: e.target.value });
    } else if (e.target.name === "endTime") {
      setAppointment({ ...appointment, endTime: e.target.value });
    } else if (e.target.name === "title") {
      setAppointment({ ...appointment, title: e.target.value });
    }
    console.log(appointment);
  };

  const reduceDate = () => {
    let day = currentDate.getDate();
    let month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    // let month = currentDate.getMonth();
    let year = currentDate.getFullYear();
    console.log("Today was : " + day + " " + month + " " + year);
    console.log(parseInt(month));
    if (day === 1) {
      if (parseInt(month) === 1 || 3 || 5 || 7 || 8 || 10 || 12) {
        day = 30;
        month = parseInt(month) - 1;
      } else {
        day = 31;
        month = parseInt(month) - 1;
      }
    } else {
      day = day - 1;
    }
    console.log("Today was : " + day + " " + month + " " + year);
    let previousDay = year + "-" + month + "-" + day;
    let D_Day = new Date(previousDay);
    console.log(D_Day);
    setCurrentDate(D_Day);
    console.log("Today is : " + currentDate.toLocaleString());
  };

  const IncreaseDate = () => {
    let day = currentDate.getDate();
    let month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    let year = currentDate.getFullYear();
    if (parseInt(day) === 30 || 31) {
      if (parseInt(month) === 1 || 3 || 5 || 7 || 8 || 10 || 12) {
        if (day === 31) {
          day = 1;
          month = parseInt(month) + 1;
        } else {
          day += 1;
        }
      } else {
        day = 1;
        month = parseInt(month) + 1;
      }
    } else {
      day += 1;
    }
    let nextDay = year + "-" + month + "-" + day;
    console.log(nextDay);
    let D_Day = new Date(nextDay);
    console.log(D_Day);
    setCurrentDate(D_Day);
  };

  const InputSubmit = () => {
    let k = "12/12/2011 " + appointment.startTime;
    let k2 = "12/12/2011 " + appointment.endTime;
    if (new Date(k) > new Date(k2)) {
      console.log("Yohohoho");
    }
  };

  console.log("tool");

  return (
    <div className="Main">
      <div className="header">Begin Calendar Appointment</div>

      <div className="Container">
        {/* Left button for date change */}

        <div className="LeftButton">
          <button onClick={reduceDate}>
            <img className="image" src={LeftArraow} alt="left arrow" />
          </button>
        </div>

        {/* Display block of the application */}
        <div className="Center">
          {flag ? (
            <div className="Display">
              <div className="date">Date Heading</div>
              <div className="appointmentList">
                {list.map((el, i) => {
                  return (
                    <div className="appointment" key={i}>
                      <div className="time">
                        {el.time < 12 ? el.time + " AM" : el.time + " PM"}
                      </div>{" "}
                      <div className="title">{el.title} </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="Display">
              <div className="date">{DateString}</div>
              <div className="appointmentForm">
                <form className="InputForm">
                  <div className="inputLabel">
                    <label>Title</label>
                    <input name="title" type="string" onChange={setInput} />
                  </div>
                  {/* <div className="inputLabel">
                <label>Date</label>
                <input name="date" type="date" onChange={setInput} />
              </div> */}
                  <div className="inputLabel">
                    <label>Start Time</label>
                    <input name="startTime" type="time" onChange={setInput} />
                  </div>
                  <div className="inputLabel">
                    <label>End Time</label>
                    <input name="endTime" type="time" onChange={setInput} />
                  </div>
                  <input
                    className="SubmitButton"
                    type="button"
                    onClick={InputSubmit}
                    value="submit"
                  />
                </form>
              </div>
            </div>
          )}

          <div className="AddButton">
            <button onClick={() => setflag(!flag)}>
              <img className="image" src={add} alt="add Appointment" />
            </button>
          </div>
        </div>

        {/* right button date change */}

        <div className="RightButton">
          <button onClick={IncreaseDate}>
            <img className="image" src={rightArraow} alt="right arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

import "./schedule.css";

const Schedule = () => {
  return (
    <section className="app__schedule">
      <div className="app__schedule-head">
        <p className="app__schedule-head_heading">Schedule</p>
        <p className="app__schedule-head_date">
          <span className="app__schedule-head_date-span">DAY 1</span>/ DAY 2/
          DAY 3
        </p>
      </div>
      <div className="app__schedule-span"></div>
      <div className="app__schedule-time">
        <div className="app__schedule-time_date">
          <h1>30th DEC</h1>
          <p>
            Ready to show the world what you’ve got while having maximum fun?
            get your ticket today and compete for the star prize
          </p>
        </div>
        <span className="app__schedule-time_span"></span>
        <div className="app__schedule-time_date-schedules">
          <div className="app__schedule-time_date-schedule">
            <p>8:00am Preparation</p>
            <p>
              Ready to show the world what you’ve got while having maximum fun?
            </p>
          </div>
          <div className="app__schedule-time_date-schedule">
            <p>8:00am Preparation</p>
            <p>
              Ready to show the world what you’ve got while having maximum fun?
            </p>
          </div>
          <div className="app__schedule-time_date-schedule">
            <p>8:00am Preparation</p>
            <p>
              Ready to show the world what you’ve got while having maximum fun?
            </p>
          </div>
        </div>
        <span className="app__schedule-time_span"></span>
        <div className="app__schedule-time_date-schedules">
          <div className="app__schedule-time_date-schedule">
            <p>8:00am Preparation</p>
            <p>
              Ready to show the world what you’ve got while having maximum fun?
            </p>
          </div>
          <span className="app__schedule-time_date-schedule_span"></span>
          <div className="app__schedule-time_date-schedule">
            <p>8:00am Preparation</p>
            <p>
              Ready to show the world what you’ve got while having maximum fun?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Schedule;

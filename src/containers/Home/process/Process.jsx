import "./process.css";

const Process = () => {
  return (
    <section className="app__process">
      <div className="app__process-contain">
        <p className="app__process-heading">The process</p>
        <div className="app__process-div" />
        <div className="app__process-processes">
          <h1>01</h1>
          <h4 className="h4two">Auditions</h4>
          <div className="para">
            <p>
              1st stage: Contestants are required to follow us on Instagram
              @Smarthivetalenthunt then fill out the registration form on the
              website stating the specific talent they want to showcase, then
              upload a 2 minute video of them showcasing such talent.
            </p>
            <p>
              2nd stage: Successful Contestants will be notified and invited to
              register on the website
            </p>
          </div>
        </div>
        <div className="app__process-div" />
        <div className="app__process-processes">
          <h1>02</h1>
          <h4 className="h4two">Voting</h4>
          <p className="h4two__p">
            Contestants will be assigned signatures and numbers, then will be
            voted for by their supporters and well-wishers.
          </p>
        </div>
        <div className="app__process-div" />
        <div className="app__process-processes">
          <h1>03</h1>
          <h4 className="h4two">Top 20 Finalists</h4>
          <p>
            Top 20 finalists from the voting process will make it to the live
            show in Abuja. They will be competing together on stage for the
            grand price of N1,000,000 and other consolation prices for other
            three runners-up
          </p>
        </div>
        <div className="app__process-div" />
      </div>
    </section>
  );
};
export default Process;

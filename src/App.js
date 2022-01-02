import "./styles.css";
import Background from "./Background.png";
import wobot from "./download.png";
import solid from "./Solid_lines.png";
import polygen from "./Polygon.png";
export default function App() {
  return (
    <>
      <div>
        <img className="App" src={Background} />
        <img class="logo" src={wobot} />
      </div>
      <div className="form">
        <img src={solid} />
        <h1 className="heading">It’s a delight to have you onboard</h1>
        <p className="heading-sub">
          Help us know you better.
          <br />
          (This is how we optimize Wobot as per your business needs)
        </p>
        <p className="company">Company name</p>
        <input
          className="input1"
          text="name"
          placeholder="  e.g. Example Inc"
        />
        <p className="industry">Industry</p>
        <select className="input2">
          <option> Select</option>
        </select>
        <p className="size">Company size</p>
        <div className="button-group">
          <button className="buttons">1-20</button>
          <button className="buttons">21-50</button>
          <button className="buttons btn">51-200</button>
          <button className="buttons">201-500</button>
          <button className="buttons">500+</button>
          <button className="submit">Get Started</button>
        </div>
        <p className="terms">Terms of use | Privacy policy</p>
      </div>
    </>
  );
}

import { observer } from "mobx-react-lite";
import "./App.css";
import store from "./store/store";
const App = observer(() => {
  return (
    <div
      className="App"
      onClick={() => store.clicked()}
      onMouseOver={() => store.mouseOvered()}
      onMouseOut={() => store.mouseOuted()}
    >
      <p>Click: {store.clicksCount}</p>
      <p>Mouse Over: {store.mouseOver}</p>
      <p>Mouse Out: {store.mouseOut}</p>
      <p>Timestamp: {store.timeStamp}</p>
      <p>Total: {store.totalEventsCount}</p>
      <button onClick={() => store.reset()}>Reset</button>
      <button onClick={() => store.startTime()}>Timer</button>
    </div>
  );
});

export default App;

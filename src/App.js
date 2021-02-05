import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import NetflixApp from "./NetflixApp";

function App() {
  return (
    <Provider store={store}>
      <NetflixApp />
    </Provider>
  );
}

export default App;

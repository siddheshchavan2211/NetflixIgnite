import Body from "./Components/Body";
import { Provider } from "react-redux";
import Store from "./Utils/Store";
function App() {
  return (
    <Provider store={Store}>
      <Body />
    </Provider>
  );
}

export default App;

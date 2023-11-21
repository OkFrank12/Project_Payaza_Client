import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./router/MainRouter";
import { Provider } from "react-redux";
import { Store } from "./global/Store";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";

const App = () => {
  let persistor = persistStore(Store);
  return (
    <>
      <Provider store={Store}>
        <PersistGate persistor={persistor} loading={null}>
          <RouterProvider router={MainRouter} />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CartPage from './components/CartPage';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CartPage />
      </div>
    </Provider>
  );
}

export default App;
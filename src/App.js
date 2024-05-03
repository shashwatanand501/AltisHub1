import './App.css';
import ListViewInvoice from './Screen/ListViewInvoice/ListViewInvoice';
import ListViewInvoiceAdd from './Screen/ListViewInvoiceAdd/ListViewInvoiceAdd';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={ListViewInvoice} />
        <Route path='/add' Component={ListViewInvoiceAdd} />
      </Routes>
    </Router>
  );
}

export default App;

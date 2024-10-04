import { BrowserRouter as Router } from 'react-router-dom';
import { AppContextProvider as Provider } from '../Context';
import Routes from '../Routes';
import Layout from '../Layout';

function App() {
  return (
    <Provider>
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;

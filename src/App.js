import './scss/app.scss';
import Sidebar from './components/sidebar';
import Layout from './components/layout'

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Layout />
    </div>
  );
}

export default App;

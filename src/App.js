import logo from './logo.svg';
import './App.css';
import SignUp from './pages/SignUp';

function App() {

const styleApp = {
  backgroundColor: "#282c34",
  color: 'white',
  height: '100vh',
  textAlign: 'center',
}

  return (
    <div style={styleApp}>
      <div style={{padding:'10rem'}}>
      <SignUp/>

      </div>
    </div>
  );
}

export default App;

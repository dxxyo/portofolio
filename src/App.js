import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className='main'>
      <div className='h-full w-full relative'>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;

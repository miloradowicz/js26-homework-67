import CombinationLock from './containers/CombinationLock/CombinationLock';

const App = () => {
  return (
    <>
      <div className='container text-center p-5' style={{ maxWidth: '400px' }}>
        <CombinationLock />
        <div className='fst-italic mt-5'>
          the password is <b>1337</b>
        </div>
      </div>
    </>
  );
};

export default App;

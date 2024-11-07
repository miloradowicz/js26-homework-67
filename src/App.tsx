import CombinationLock from './containers/CombinationLock/CombinationLock';

const App = () => {
  return (
    <>
      <div className='container p-5' style={{ maxWidth: '400px' }}>
        <CombinationLock />
        <div className='mt-5'>
          <p className='fst-italic text-center'>
            Пароль по умолчанию <b>1337</b>
          </p>
          <p>Пароль можно сменить в файле combinationLockSlice</p>
          <p>
            Клавиша <b>'&lt;'</b> удаляет последний символ.
          </p>
          <p>
            Клавиша <b>'E'</b> проверяет пароль и выводит статус.
          </p>
          <p>
            После проверки статуса, чтобы попробовать другой пароль необходимо
            нажать клавишу <b>'&lt;'</b>. В этом случае клавиша <b>'&lt;'</b>
            сбрасывает статус и очищает поле ввода.
          </p>
        </div>
      </div>
    </>
  );
};

export default App;

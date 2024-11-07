import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import { RootState } from '../../app/store';
import {
  addCharacter,
  deleteLastCharacter,
  enterCombination,
} from './combinationLockSlice';
import Display from '../../components/Display/Display';

const buttons = [
  { text: '1', variant: 'secondary' },
  { text: '2', variant: 'secondary' },
  { text: '3', variant: 'secondary' },
  { text: '4', variant: 'secondary' },
  { text: '5', variant: 'secondary' },
  { text: '6', variant: 'secondary' },
  { text: '7', variant: 'secondary' },
  { text: '8', variant: 'secondary' },
  { text: '9', variant: 'secondary' },
  { text: '<', variant: 'danger' },
  { text: '0', variant: 'secondary' },
  { text: 'E', variant: 'success' },
];

const CombinationLock = () => {
  const currentInput = useSelector(
    (state: RootState) => state.combinationLock.currentInput
  );
  const displayText = useSelector(
    (state: RootState) => state.combinationLock.text
  );
  const displayStatus = useSelector(
    (state: RootState) => state.combinationLock.displayStatus
  );

  const dispatch = useDispatch();

  const action = (character: string) => {
    switch (character) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
        if (currentInput.length < 4) {
          dispatch(addCharacter(character));
        }
        break;

      case '<':
        if (currentInput.length > 0) {
          dispatch(deleteLastCharacter());
        }
        break;

      case 'E':
        dispatch(enterCombination());
        break;
    }
  };

  return (
    <>
      <div className='row row-cols-3 g-2'>
        <div className='col-12'>
          <Display text={displayText} status={displayStatus} />
        </div>
        {buttons.map(({ text, variant }) => (
          <div key={text} className='col'>
            <Button text={text} variant={variant} action={() => action(text)} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CombinationLock;

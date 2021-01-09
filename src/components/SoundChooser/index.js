import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { SoundContext } from '../../Context/SoundContext';

const SoundChooser = () => {
  const history = useHistory();
  const { setSound } = useContext(SoundContext);
  return (
    <div className='sound-form'>
      <button
        onClick={() => {
          setSound('horns');
          history.push('/player');
        }}
      >
        Horns
      </button>
      <button
        onClick={() => {
          setSound('bears');
          history.push('/player');
        }}
      >
        Bears
      </button>
      <button
        onClick={() => {
          setSound('cats');
          history.push('/player');
        }}
      >
        Cats
      </button>
    </div>
  );
};
export default SoundChooser;

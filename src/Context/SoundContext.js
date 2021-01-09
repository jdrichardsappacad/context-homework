import { createContext, useState } from 'react';

const horns = [
  '/sounds/horns/horns1.mp3',
  '/sounds/horns/horns2.mp3',
  '/sounds/horns/horns3.mp3'
];
const bears = [
  '/sounds/bears/bear1.mp3',
  '/sounds/bears/bear2.mp3',
  '/sounds/bears/bear3.mp3'
];

const cats = [
  '/sounds/cats/cat1.mp3',
  '/sounds/cats/cat2.mp3',
  '/sounds/cats/cat3.mp3'
];
export const SoundContext = createContext();

export default function SoundProvider(props) {
  const [sound, setSound] = useState('bears');

  return (
    <SoundContext.Provider
      value={{
        sound,
        setSound,
        cats,
        horns,
        bears
      }}
    >
      {props.children}
    </SoundContext.Provider>
  );
}

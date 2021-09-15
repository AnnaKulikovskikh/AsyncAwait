import GameSavingLoader from './GameSavingLoader';

try {
  GameSavingLoader.load().then(
    (saving) => console.log(saving),
    (error) => console.log(error),
  )
} catch {
  console.log(error);
}

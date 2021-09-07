// TODO: write your code here
import read from './reader';
import json from './parse';

export default class GameSavingLoader {
  static load() {
    (async() => {
      try {
        const data = await read();
        const value = await json(data);
        return value;
      } catch {
        console.log('error');
      }
    })();
  }
}

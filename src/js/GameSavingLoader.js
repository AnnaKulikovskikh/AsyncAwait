// TODO: write your code here
import read from './reader';
import json from './parse';
import GameSaving from './gameSaving';

export default class GameSavingLoader {
  static load() {
    (async () => {
      const data = await read();
      const value = await json(data);
      const parseSaving = JSON.parse(value);
      const game = new GameSaving(parseSaving.id, parseSaving.created, parseSaving.userInfo);
      return game;
    })();
  }
}

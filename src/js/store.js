import { derived, get, writable } from 'svelte/store';

/** @typedef {import('./quotes.js').EncryptedQuote} EncryptedQuote */

// progress is null if none or an array of whether the char is filled
const defaultUsers = [
  {
    id: '',
    name: '',
    progress: [null, [true]][0],
    solved: false,
  },
].slice(1);

/** @typedef {typeof defaultUsers[0]} User */
/** @typedef {import('peerjs').DataConnection} Connection */

export const users = writable(defaultUsers);

export const id = writable('');
export const gameProblem = writable(
  /** @type {EncryptedQuote | null} */ (null)
);
export const name = writable(`person-${Math.floor(Math.random() * 10000)}`);
export const hivemindConnection = writable(
  /** @type {Connection | null} */ (null)
);
export const progress = writable([null, [true]][0]);
export const solved = writable(false);
/** @type {Map<string, Connection>} */
export const connections = new Map(); // id -> connection

export const self = derived(
  [id, name, progress, solved],
  ([id, name, progress, solved]) => {
    return { id, name, progress, solved };
  }
);

export const problemStart = derived(gameProblem, () => Date.now());

/** @type {import('svelte/store').Readable<Map<string, number>>} */
export const timeTakenByOpponents = derived(
  [users, problemStart],
  ([$users, $problemStart]) => {
    return new Map(
      $users.map((u) => [
        u.id,
        u.solved
          ? get(timeTakenByOpponents).get(u.id) ?? Date.now() - $problemStart
          : Date.now() - $problemStart,
      ])
    );
  }
);

export const resetStores = () => {
  id.set('');
  gameProblem.set(null);
  name.set('');
  hivemindConnection.set(null);
  progress.set(null);
  solved.set(false);
  connections.clear();
};
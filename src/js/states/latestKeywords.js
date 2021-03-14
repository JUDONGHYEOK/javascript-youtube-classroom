import { MAX_LATEST_KEYWORD_COUNT } from '../constants/classroom.js';
import { LATEST_KEYWORDS } from '../constants/localStorage.js';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage.js';

const latestKeywords = {
  value: [],

  init() {
    this.set(getLocalStorage(LATEST_KEYWORDS) ?? []);
  },

  get() {
    return this.value;
  },

  set(newKeywords) {
    this.value = newKeywords;
  },

  add(newKeyword) {
    const targetIdx = this.value.indexOf(newKeyword);

    if (targetIdx > -1) {
      this.value.splice(targetIdx, 1);
    } else if (this.value.length === MAX_LATEST_KEYWORD_COUNT) {
      this.value.shift();
    }
    this.value.push(newKeyword);
    setLocalStorage(LATEST_KEYWORDS, this.value ?? []);
  },

  getLastKeyword() {
    return this.value[this.value.length - 1];
  },
};

export default latestKeywords;
/* eslint-disable no-underscore-dangle */
import 'jest-localstorage-mock';
import localStorageUtils from '../storage.utils';

const girlFriendKey = 'girlFriend';
const girlFriendValue1 = false;
const girlFriendValue2 = true;

const ageKey = 'age';
const age = 27;

afterAll(() => {
  localStorage.clear();
  jest.resetAllMocks();
});

describe('localStorageUtils', () => {
  describe('setKey()', () => {
    it(`should set "${girlFriendValue1}" to key "${girlFriendKey}"`, () => {
      localStorageUtils.setKey(girlFriendKey, girlFriendValue1);
      expect(localStorage.setItem).toHaveBeenCalledWith(girlFriendKey, girlFriendValue1);
      expect(Object.keys(localStorage.__STORE__)).toHaveLength(1);
      expect(localStorage.__STORE__[girlFriendKey]).toEqual(girlFriendValue1.toString());
    });

    it('should not set item when key is not provided', () => {
      const expectedResult = { ...localStorage.__STORE__ };
      localStorageUtils.setKey(undefined, 'Some Data');
      expect(Object.keys(localStorage.__STORE__)).toHaveLength(1);
      expect(localStorage.__STORE__).toEqual(expectedResult);
    });

    it(`should update "${girlFriendValue2}" to key "${girlFriendKey}"`, () => {
      localStorageUtils.setKey(girlFriendKey, girlFriendValue2);
      expect(localStorage.setItem).toHaveBeenCalledWith(girlFriendKey, girlFriendValue2);
      expect(Object.keys(localStorage.__STORE__)).toHaveLength(1);
      expect(localStorage.__STORE__[girlFriendKey]).toEqual(girlFriendValue2.toString());
    });

    it(`should set "${age}" to key "${ageKey}"`, () => {
      localStorageUtils.setKey(ageKey, age);
      expect(localStorage.setItem).toHaveBeenCalledWith(ageKey, age);
      expect(Object.keys(localStorage.__STORE__)).toHaveLength(2);
      expect(localStorage.__STORE__[ageKey]).toEqual(age.toString());
      expect(localStorage.__STORE__[girlFriendKey]).toEqual(girlFriendValue2.toString());
    });
  });

  describe('getKey()', () => {
    it(`should return "${age}" for key "${ageKey}"`, () => {
      expect(localStorageUtils.getKey(ageKey)).toEqual(age.toString());
      expect(localStorage.getItem).toHaveBeenCalledWith(ageKey);
    });
  });

  describe('removeKey()', () => {
    it(`should remove key "${ageKey}" from local storage`, () => {
      localStorageUtils.removeKey(ageKey);
      expect(localStorage.removeItem).toHaveBeenCalledWith(ageKey);
      expect(Object.keys(localStorage.__STORE__)).toHaveLength(1);
      expect(localStorage.__STORE__[ageKey]).toEqual(undefined);
    });
  });

  describe('clearAll()', () => {
    it('should clear local storage', () => {
      localStorageUtils.clearAll();
      expect(localStorage.clear).toHaveBeenCalled();
      expect(localStorage.clear).toHaveBeenCalledTimes(1);
      expect(Object.keys(localStorage.__STORE__)).toHaveLength(0);
    });
  });
});

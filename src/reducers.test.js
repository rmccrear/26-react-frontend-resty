import {reducer} from './reducers';

describe('Reducers', () => {
  test('should add an element to history', () => {
    const oldState = {
      history: [
        {
          url: 'https://my.api/api/v1/pets',
          header: {},
          data: {}
        }
      ]
    }
    const message = {
      type: 'ADD_TO_HISTORY',
      restOp: {
        url: 'https://my.api/api/v1/pet/1',
        header: {},
        data: {name: 'Fluffy'}
      }
    }
    const newState = reducer(oldState, message);
    expect(newState.history[1].url).toBe('https://my.api/api/v1/pet/1');
    expect(newState.history[0].url).toBe('https://my.api/api/v1/pets');
    expect(oldState.history[0].url).toBe('https://my.api/api/v1/pets');
    expect(oldState.history.length).toBe(1);
  });
  
});
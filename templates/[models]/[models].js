import Immutable from 'immutable';
import * as [name]Service from '../services/[name]';

export default {
  namespace: '[name]',

  state: Immutable.fromJS({
  }),

  subscriptions: {
    init({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        match(pathname, '/[name]', () => dispatch({ type: '[name]' }));
      });
    },
  },

  effects: {
    *[name]({ payload }, { call, put }) {
      const [name] = yield call([name]Service.[name]);
      yield put({
        type: '[name]',
        payload: { [name] },
      });
    },
  },

  reducers: {
    [name](state, { payload: { [name] } }) {
      return state.update('[name]', () => Immutable.fromJS([name]));
    },
  },
};

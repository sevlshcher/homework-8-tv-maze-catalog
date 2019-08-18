import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import showReducer from './showReducer';

// Вам необходимо реализовать search и shows редьюсеры.
// Создайте соответствующие файлы.

export default combineReducers({
  searchReducer,
  showReducer
});

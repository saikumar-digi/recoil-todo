import { selector } from 'recoil';
import { todoListState } from '../atoms/TodoState';

export const TotalTodos = selector({
  key: 'charCountState',
  get: ({ get }) => {
    const todos = get(todoListState); 
    return todos.length;
  },
});

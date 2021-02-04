import { Filters } from "../constants";

export const getTodoState = store => store.todos;

export const getTodoList = store =>
  getTodoState(store) ? getTodoState(store).allIds : [];

export const getTodoById = (store, id) =>
  getTodoState(store) ? { ...getTodoState(store).byIds[id], id } : {};

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getTodos = store =>
  getTodoList(store).map(id => getTodoById(store, id));

  export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
      const allTodos = getTodos(store)
      switch (visibilityFilter) {
        case Filters.COMPLETED:
            return allTodos.filter(todo => todo.completed)
          
        case Filters.INCOMPLETE:
          return allTodos.filter(todo => !todo.completed)
        case Filters.ALL:
        default:
            return allTodos          
      }
  }
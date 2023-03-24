import { Todo } from "./todo";

describe("Todo", () => {
  it('accepts tasks', () => {
    const todo = new Todo()
    todo.addTask('Brew tea')
    expect(todo.tasks).toEqual([{ name: 'Brew tea', status: false}])
  })
  it('supports removing tasks', () => {
    const todo = new Todo()
    todo.addTask('Brew tea')
    todo.addTask('Brew coffee')
    todo.removeTask('Brew tea')
    expect(todo.tasks).toEqual([{name: 'Brew coffee', status: false}])
  })
  it.todo('supports toggling completed state')
  it.todo('can be reset')
  it('starts empty', () => {
    const todo = new Todo()
    expect(todo.tasks).toEqual([])
  })
});

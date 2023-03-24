interface Task {
  name: string
  status: boolean
}

export class Todo {
  private _tasks: Record< string, boolean> = {};
  addTask(name: string):void {
    this._tasks[name] = false
  }
  removeTask(name: string) {
    delete this._tasks[name]
  }
  get tasks():Task[] {
    return Object.entries(this._tasks).map(([name, status]) => {
      return { name, status }
    })
  }
}
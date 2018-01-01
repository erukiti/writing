export abstract class Reward {
  private _title: string
  private _isDone: boolean

  constructor(title: string = '') {
    this._title = title
    this._isDone = false
  }

  done() {
    this._isDone = true
    this._done()
  }

  isDone() {
    return this._isDone
  }

  abstract _done()
}

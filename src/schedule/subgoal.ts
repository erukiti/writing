import { Reward } from '../reward'

class DummyReward extends Reward {
  _done() {
  }
}

export interface SubgoalOpt {
  reward?: Reward
  description?: string
  date?: Date
}
export class Subgoal {
  private _point: number
  private _reward: Reward
  private _description: string
  private _isDone: boolean
  private _isDeadline: boolean
  private _date: Date

  constructor(point: number, opt: SubgoalOpt = {}) {
    this._point = point
    this._reward = opt.reward || new DummyReward()
    this._description = opt.description
    this._date = opt.date
    this._isDone = false
  }

  // FIXME
  setDeadline(isDeadline: boolean = true) {
    this._isDeadline = isDeadline
  }
 
  getGoalPoint() {
    return this._point
  }
 
  isDone(point?: number) {
    if (point === undefined || this._isDone) {
      return this._isDone
    } else if (point < this._point) {
      return false
    }

    this._reward.done()
    this._isDone = true
    return true
  } 
}

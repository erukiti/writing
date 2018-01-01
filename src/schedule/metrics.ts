import * as assert from 'assert'
import { Subgoal } from './subgoal'

export class Metrics {
  private _label: string
  private _goals: Subgoal[]
  private _current: number

  constructor(label: string, goals: Subgoal[] = []) {
    this._label = label
    this._goals = goals
    this._current = 0
    // assert goals が正しいかのバリデーション
  }

  setCurrent(n: number) {
    this._current = n
    this._goals.forEach(goal => goal.isDone(n))
  }

  getCurrent() {
    return this._current
  }

  getCurrentPercent() {
    const goal = this._goals.find(goal => !goal.isDone())
    if (goal) {
      return this._current / goal.getGoalPoint() * 100
    } else {
      return 100
    }
  }

  getGoales() {
    return this._goals.filter(goal => goal.isDone()).length
  }
}
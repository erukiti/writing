import { Subgoal } from './subgoal'
import { Reward } from './reward'

describe('', () => {
  it('', () => {
    const subgoal = new Subgoal(100)
    expect(subgoal.isDone()).toBe(false)
    expect(subgoal.isDone(0)).toBe(false)
    expect(subgoal.isDone(99)).toBe(false)
    expect(subgoal.isDone(100)).toBe(true)
    expect(subgoal.isDone()).toBe(true)
    expect(subgoal.isDone(99)).toBe(true)
    expect(subgoal.isDone()).toBe(true)
  })
})

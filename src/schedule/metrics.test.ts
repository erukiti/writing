import { Metrics } from './metrics'
import { Subgoal } from './subgoal'

describe('', () => {
  it('', () => {
    const goals = [new Subgoal(100)]
    const metrics = new Metrics('文字数', goals)
    expect(metrics.getCurrent()).toBe(0)
    metrics.setCurrent(50)
    expect(metrics.getCurrent()).toBe(50)
  })

  it('ゴール達成数', () => {
    const goals = [new Subgoal(50), new Subgoal(100)]
    const metrics = new Metrics('文字数', goals)
    expect(metrics.getGoales()).toBe(0)
    metrics.setCurrent(49)
    expect(metrics.getGoales()).toBe(0)
    metrics.setCurrent(50)
    expect(metrics.getGoales()).toBe(1)
    metrics.setCurrent(100)
    expect(metrics.getGoales()).toBe(2)
    metrics.setCurrent(0)
    expect(metrics.getGoales()).toBe(2)
  })

  it('パーセント', () => {
    const goals = [new Subgoal(50), new Subgoal(100)]
    const metrics = new Metrics('文字数', goals)
    expect(metrics.getCurrentPercent()).toBe(0)
    metrics.setCurrent(49)
    expect(metrics.getCurrentPercent()).toBe(49 / 50 * 100)
    metrics.setCurrent(50)
    expect(metrics.getCurrentPercent()).toBe(50 / 100 * 100)
    metrics.setCurrent(100)
    expect(metrics.getCurrentPercent()).toBe(100)
    metrics.setCurrent(0)
    expect(metrics.getCurrentPercent()).toBe(100)
  })

})

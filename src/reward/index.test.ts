import { Reward } from './index'

describe('Reward', () => {
  it('done', () => {
    const mock = jest.fn()
    class DummyReward extends Reward {
      _done() {
        mock()
      }
    }
    const reward = new DummyReward()
    expect(reward.isDone()).toBe(false)
    reward.done()
    expect(mock).toBeCalled()
    expect(reward.isDone()).toBe(true)
  })
})

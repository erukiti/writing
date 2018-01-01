import { NarouDocument } from './narou'

it('static metricsList', () => {
  expect(NarouDocument.metricsList).toEqual(['文字数'])
})

describe('getText()', () => {
  it('', () => {
    const doc = new NarouDocument()
    expect(doc.getText()).toBe('')
    doc.edit('hoge')
    expect(doc.getText()).toBe('hoge')
  })
})

describe('getMetrics()', () => {
  it('', () => {
    const doc = new NarouDocument()
    doc.edit('hoge')
    expect(doc.getMetrics('文字数')).toBe(4)

    doc.edit('ほげ')
    expect(doc.getMetrics('文字数')).toBe(2)

    doc.edit('ほげ ふが')
    expect(doc.getMetrics('文字数')).toBe(4)
  })
  it('', () => {
    const doc = new NarouDocument()
    expect(doc.getMetrics('unknown')).toBeNaN()
  })
})
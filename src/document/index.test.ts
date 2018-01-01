import { Document } from './index'

class TestDocument extends Document {
  private text: string
  edit(text: string) {
    this.text = text
  }
  getText() {
    return this.text
  }

  getMetrics() {
    return NaN
  }
}

it('getVersion', () => {
  const doc = new TestDocument()
  doc.edit('hoge')
  expect(doc.getVersion()).toBe('ecb666d778725ec97307044d642bf4d160aabb76f56c0069c71ea25b1e926825')
})

it('id', () => {
  const doc1 = new TestDocument()
  const doc2 = new TestDocument()
  expect(doc1.id !== doc2.id).toBeTruthy()
})

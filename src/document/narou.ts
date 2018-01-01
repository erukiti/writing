import { Document } from './index'

const reSpace = /\r|\n|\s|　|<\/?[^>]*>/gi
export class NarouDocument extends Document {
  private _text: string
  static metricsList = ['文字数']

  constructor() {
    super()
    this._text = ''
  }

  edit(text: string) {
    this._text = text
  }

  getText() {
    return this._text
  }

  getMetrics(label: string) {
    if (label !== '文字数') {
      return NaN
    }

    return this._text.replace(reSpace, '').length
  }
}

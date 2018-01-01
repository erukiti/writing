import { getVersion } from '../timemachine'
const uuidv4 = require('uuid-v4')

export abstract class Document {
  static metricsList: string[] = []

  public id = uuidv4()

  abstract edit(text: string): void
  abstract getText(): string
  public getVersion() {
    return getVersion(this.getText())
  }
  abstract getMetrics(label: string): number
}

// FIXME 将来的にはASTとかなんとか

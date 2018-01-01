import { Metrics } from './metrics'

class Issue {
  private _title: string
  private _labels: string[]
  private _metricses: Metrics[]

  constructor(title: string, labels: string[] = [], metricses: Metrics[] = []) {
    this._title = title
    this._labels = labels
    this._metricses = metricses
  }
}
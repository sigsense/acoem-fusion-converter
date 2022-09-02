import * as fs from 'fs'
import { SampleConverter } from './sample'

describe('Unit test for sample converter', function () {
  it('converts sample file', async () => {
    const converter = new SampleConverter()
    const buff = fs.readFileSync('lib/sample.dat')
    const result = converter.convert(buff)

    expect(result.series[0].values).toEqual([3.5, 5.7, 7.8])
    expect(result.series[1].values).toEqual(['apple', 'banana', 'melon'])
    expect(result.series[2].values).toEqual(['true', 'false', 'true'])
  })
})

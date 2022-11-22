import swapiGetter from './swapiGetter.js'
import mockAxios from 'axios'

jest.mock('axios', () => ({
  __esModule: true,
  default: {
    get: jest.fn().mockResolvedValue({ data: { name: "Mock Jedi" } })
  }
}))
//// another way to mock
// jest.mock('axios')
// mockAxios.get.mockResolvedValue({ data: { name: "Mock Jedi" } })

describe('swapiGetter', () => {
  afterEach(jest.clearAllMocks)

  test('should return a name', async () => {
    const result = await swapiGetter(1)
    expect(result).toBe('Mock Jedi')
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
  })
})
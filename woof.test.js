const woof = require('./woof')
test('shoult return the number of woofs', () => {
  const result = woof('pop')

  expect(result).toMatch(/\dwoof/i)
  expect(['a', 'b', 'c']).toContain('b')
})

// test('should return null when not given a string', () => {
//   const result = woof()
//   expect(result).toBeNull()
// })

test('should return error when not given a string', () => {
  expect(() => woof()).toThrow('MUST')
})

test.todo('think about numbers')
// @vitest-environment node
const knex = require('knex')
const testConfig = require('./knexfile').test

const testDb = knex(testConfig)

const db = require('./db')

// beforeAll/beforeEach need to be async functions because vitest
// doesn't like things being returned from hooks
beforeAll(async () => {
  await testDb.migrate.latest()
})

// alternative: a promise that returns null/undefined
// beforeAll(() => {
//   return testDb.migrate.latest().then(() => null)
// })

beforeEach(async () => {
  await testDb.seed.run()
})

describe('getWidgets', () => {
  it('returns the correct widgets array', () => {
    return db.getWidgets(testDb).then((widgets) => {
      expect(widgets).toHaveLength(3)
      expect(widgets[0].name).toBe('Red widget')
    })
  })
})

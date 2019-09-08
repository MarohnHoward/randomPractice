
module.exports = {
  beforeEach: browser => {
    browser.url('https://www.google.com/')
  },
  after: browser => {
    browser.end()
  },
  'Search Bar Test': browser => {
    browser
      .setValue('input[name="q"]', ['Vines not dead', browser.Keys.ENTER])
      .verify.valueContains('.gLFyf', "Vines not dead")
      .assert.urlContains('google')
  }
}

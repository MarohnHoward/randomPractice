var weatherPage = {}
module.exports ={
    beforeEach: browser => {
     weatherPage = browser.page.weathermanPage()
     weatherPage.navigate()
    },
    after: browser => {
     weatherPage.end()
    },
    'Search Weather Test' : browser => {
     var searchTest = {
         zip: '43082',
         city: 'Westerville'
     }
     weatherPage
        .setValue('@searchBar', searchTest.zip)
        .click('@submitBtn')
        .api.pause(1000)
    weatherPage
     .verify.containsText('@resultCity', searchTest.city)
    }
}
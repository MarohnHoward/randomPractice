module.exports = {
    url: 'https://devmountain-qa.github.io/weatherman/build/index.html',
    elements: {
        searchBar: '.enter-location__input',
        submitBtn: {
            selector: '//button',
            locateStrategy: 'xpath'
        },
        resultCity:{
            selector: '//h3[@class="current-weather__location"]',
            locateStrategy: 'xpath'

        },
    }
}
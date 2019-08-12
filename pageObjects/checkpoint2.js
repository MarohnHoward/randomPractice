module.exports = {
    url: 'https://devmountain-qa.github.io/Automation-Basics/build/',
    elements: {
        evenOddInput: {
            selector: '//input[@name="evenOddInput"]',
            locateStrategy: 'xpath'
    },
    evenOddBtn: {
        selector:'//button[@name="evenOddButton"]',
        locateStrategy: 'xpath'
    },
    evenResult:{
        selector: '//span[@name="evenResults"]',
        locateStrategy: 'xpath'
    },
    oddResult: {
        selector: '//span[@name="oddResults"]',
        locateStrategy: 'xpath'
    },
    filterObjectsInput: {
        selector: '//input[@name="objectFilterInput"]',
        locateStrategy: 'xpath'
    },
    filterObjectsBtn: {
        selector: '//button[@name="objectFilterButton"]',
        locateStrategy: 'xpath'
    },
    filterObjectsResult: {
        selector: '//span[@name="objectFilterResults"]',
        locateStrategy: 'xpath'
    },
    filterStringInput: {
        selector: '//input[@id="nameFilterInput"]',
        locateStrategy: 'xpath'
    },
    filterStringBtn: {
        selector: '//button[@id="nameFilterButton"]',
        locateStrategy: 'xpath'
    },
    filterStringResult: {
        selector:'//span[@name="nameFilterResults"]',
        locateStrategy: 'xpath'
    },
    palindromeInput: {
        selector: '//input[@name="palindromeInput"]',
        locateStrategy: 'xpath'
    },
    palindromeBtn:{
        selector: '//button[@name="palindromeButton"]',
        locateStrategy: 'xpath'
    },
    palindromeResult:{
        selector: '//span[@name="palindromeResults"]',
        locateStrategy: 'xpath'
    },
    sumInput1:{
        selector: '//input[@name="sumInput1"]',
        locateStrategy: 'xpath'
    },
    sumInput2: {
        selector: '//input[@name="sumInput2"]',
        locateStrategy: 'xpath'
    },
    sumAddBtn: {
        selector:'//button[@name="sumButton"]',
        locateStrategy: 'xpath'
    },
    sumResult: {
        selector: '//span[@name="sumResults"]',
        locateStrategy: 'xpath'
    },
},
}
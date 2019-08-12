var checkObject
module.exports = {
beforeEach: browser => {
    checkObject = browser.page.checkpoint2()
    checkObject.navigate()
    },
    'Even and odd test' : browser => {
        checkObject
        .waitForElementPresent('@evenOddInput')
        .setValue('@evenOddInput', "4,6,7,9,8,6,5,0")
        .verify.valueContains('@evenOddInput', '4,6,7,9,8,6,5,0')
        .click('@evenOddBtn')
        .verify.containsText('@evenResult', '4,6,8,6,0')
        .verify.containsText('@oddResult', '7,9,5')
    },
    'Filter objects test': browser => {
        checkObject
        .waitForElementPresent('@filterObjectsInput')
        .setValue('@filterObjectsInput', "hairColor")
        .verify.valueContains('@filterObjectsInput',  'hairColor')
        .click('@filterObjectsBtn')
        .verify.containsText('@filterObjectsResult', '"name": "Jeremy Schrader", "age": 24, "hairColor": "brown"')
    },
    'Filter string test': browser => {
        checkObject
        .waitForElementPresent('@filterStringInput')
        .setValue('@filterStringInput', 'M')
        .verify.valueContains('@filterStringInput', 'M')
        .click('@filterStringBtn')
        .verify.containsText('@filterStringResult', '"Melody", "Mark", "Maddy"')
    },
    'Palindrome input test': browser => {
        checkObject
        .waitForElementPresent('@palindromeInput')
        .setValue('@palindromeInput', 'pizza')
        .verify.valueContains('@palindromeInput', 'pizza')
        .click('@palindromeBtn')
        .waitForElementPresent('@palindromeResult')
        .verify.containsText('@palindromeResult', 'false')
    },
    'Sum input test': browser => {
        checkObject
        .waitForElementPresent('@sumInput1')
        .setValue('@sumInput1', '67')
        .verify.valueContains('@sumInput1', '67')
        .waitForElementPresent('@sumInput2')
        .setValue('@sumInput2', '89')
        .verify.valueContains('@sumInput2', '89')
        .click('@sumAddBtn')
        .verify.containsText('@sumResult','156')
    },
}
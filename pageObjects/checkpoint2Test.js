var checkObject
module.exports = {
beforeEach: browser => {
    checkObject = browser.page.automationbasics()
    checkObject.navigate()
    },
    'Even and odd test' : browser => {
        checkObject
        .waitForElementPresent('@evenOddInput')
        .click('@evenOddInput')
        .setValue('@evenOddInput', "46798650")
        .verify.containsText('@evenOddInput', '46798650')
        .click('@evenOddBtn')
    },
    'Filter objects test': browser => {
        checkObject
        .waitForElementPresent('@filterObjectsInput')
        .click('@filterObjectsInput')
        .setValue('@filterObjectsInput', "Jimmy Joe", "title", "Hack0r", "age","12")
        .verify.containsText('@filterObjectsInput',  '"Jimmy Joe", "title", "Hack0r", "age", "12"')
        .click('@filterObjectsBtn')
    },
    'Filter string test': browser => {
        checkObject
        .waitForElementPresent('@filterStringInput')
        .click('@filterStringInput')
        .setValue('@filterStringInput', '"Tina","Turner","Buddy","Carlos"')
        .verify.containsText('@filterStringInput', '"Tina","Turner","Buddy","Carlos"')
        .click('@filterStringBtn')
    },
    'Palindrome input test': browser => {
        checkObject
        .waitForElementPresent('@palindromeInput')
        .click('@palindromeInput')
        .setValue('@palindromeInput', '2+2=4')
        .verify.containsText('@palindromeInput', '2+2=4')
        .click('@palindromeBtn')
    },
    'Sum input test': browser => {
        checkObject
        .waitForElementPresent('@sumInput1')
        .click('@sumInput1')
        .setValue('@sumInput1', '67')
        .verify.containsText('@sumInput1', '67')
        .waitForElementPresent('@sumInput2')
        .click('@sumInput2')
        .setValue('@sumInput2', '89')
        .verify.containsText('@sumInput2', '89')
        .click('@sumAddBtn')
    },
}
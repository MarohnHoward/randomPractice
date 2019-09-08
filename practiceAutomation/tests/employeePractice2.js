
module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
    },
    after: browser => {
        browser.end()
    },
    'Employee Manager Test': browser => {
        var nameEntry = 'Bob Anderson'
        var phoneEntry = '9097895678'
        var titleEntry = 'The WeenMobile Driver'
        browser
            .click('[name="employee1"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input.materialInput[name="nameEntry"]', 'Bob Anderson')
            .clearValue('input.materialInput[name="phoneEntry"]')
            .setValue('input.materialInput[name="phoneEntry"]', '9097895678')
            .clearValue('input.materialInput[name="titleEntry"]')
            .setValue('input.materialInput[name="titleEntry"]', 'The Weenmobile Driver')
            .pause(1000)
            .click('[name="save"]')
            .verify.valueContains('[name="nameEntry"]', 'Bob Anderson')
            .verify.valueContains('[name="phoneEntry"]', '9097895678')
            .verify.valueContains('[name="titleEntry"]', 'The Weenmobile Driver')
    },
    'Another one': browser => {
        browser
            .click('[name="employee2"]')
            .clearValue('input.materialInput[name="nameEntry"]')
            .setValue('input.materialInput[name="nameEntry"]', 'Pinto Bean')
            .clearValue('input.materialInput[name="phoneEntry"]')
            .setValue('input.materialInput[name="phoneEntry"]', '0987654321')
            .clearValue('input.materialInput[name="titleEntry"]')
            .setValue('input.materialInput[name="titleEntry"]', 'The Number One Bitch')
            .pause(3000)
            .click('.neutralButton')
            .verify.valueContains('[name="nameEntry"]', 'Marnie Barnett')
            .verify.valueContains('[name="phoneEntry"]', '3094812387')
            .verify.valueContains('[name="titleEntry"]', 'CTO')


    },
    'Another Another one': browser => {
        browser
            .click('[name="addEmployee"]')
            .click('[name="employee11"]')
            .clearValue('input.materialInput[name="nameEntry"]')
            .setValue('input.materialInput[name="nameEntry"]', 'Aunt Darla')
            .clearValue('input.materialInput[name="phoneEntry"]')
            .setValue('input.materialInput[name="phoneEntry"]', '8013282777')
            .clearValue('input.materialInput[name="titleEntry')
            .setValue('input.materialInput[name="titleEntry"]', 'The Baker of Cookies')
            .click('[name="save"]')
            .verify.valueContains('[name="nameEntry"]', "Aunt Darla")
            .verify.valueContains('[name="phoneEntry"', '8013282777')
            .verify.valueContains('[name="titleEntry"]', 'The Baker of Cookies')
    }
}

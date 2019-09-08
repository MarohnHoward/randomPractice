
module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000/')
    },
    afterEach: browser =>{
        browser.pause(3000)
    },
    'Employee Manager Test' : browser => {
        browser
        .click('[name="employee1"]')
        .clearValue('input[name="nameEntry"]')
        .setValue('input.materialInput[name="nameEntry"]', 'Bob Anderson')
        .pause(3000)
        .clearValue('input.materialInput[name="phoneEntry"]')
        .setValue('input.materialInput[name="phoneEntry"]', '9097895678')
        .pause(3000)
        .clearValue('input.materialInput[name="titleEntry"]')
        .setValue('input.materialInput[name="titleEntry"]', 'The Weenmobile Driver')
        .pause(3000)
        .click('[name="save"]')
        .pause(3000)
    },
        'Another test' : browser => {
            browser
            .click('[name="employee2"]')
            .clearValue('input.materialInput[name="nameEntry"]')
            .setValue('input.materialInput[name="nameEntry"]', 'Pinto Bean')
            .pause(3000)
            .clearValue('input.materialInput[name="phoneEntry"]')
            .setValue('input.materialInput[name="phoneEntry"]', '0987654321')
            .pause(3000)
            .clearValue('input.materialInput[name="titleEntry"]')
            .setValue('input.materialInput[name="titleEntry"]', 'The Number One Bitch')
            .pause(3000)
            .click('.neutralButton')
        },
        'Another test': browser => {

        }
    }
    

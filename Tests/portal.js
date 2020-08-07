let createAcc = {}
let contact = {}
let edu = {}
let exp = {}
let goals = {}
let createAccount = require('../testAssets/dummyAccounts')
let contactInfo = require('../testAssets/contactInfo')
const { create } = require('domain')
module.exports = {
    beforeEach: browser => {
        createAcc = browser.page.createPage()
        contact = browser.page.contactPage()
        edu = browser.page.educationPage()
        exp = browser.page.experiencePage()
        goals = browser.page.goalsPage()
    },
    after: browser => {
        browser
            .end()
    },
    'Create Account': browser => {
        createAcc
            .create(createAccount[0])
            .pause(5000)
            .whatCourse('Web Dev Immersive')
            
    }
}
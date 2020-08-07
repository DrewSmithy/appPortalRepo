var portalCommands = {
    /**
     * @param {object} data {fName: '', lName: '', email: '', pass: ''} The object will need to have the desired credentials
     */
    create: function (data) {
        this
            .api.url(data.url)
        this
            .waitForElementVisible('@DMLogo')
            .setValue('@FName', data.fName)
            .setValue('@LName', data.lName)
            .setValue('@email', data.email)
            .setValue('@pass', data.pass)
            .verify.containsText('@createButton', 'CREATE')
            .click('@createButton')
        return this
    },
    /**
     * @param {string} course This will need to be the name of the course desired.
     */
    whatCourse: function (course) {
        var self = this
        this
            .waitForElementVisible('@currentApp')
            .getText('@currentApp', result => {
                self
                    .assert.ok(result.value = course)
                if (result.value = course) {
                    console.log('It is the correct course!')
                }
                else {
                    console.log('Wrong course')
                }
            })
        return this
    }
}
module.exports = {
    url: 'https://devmountain.com/application?sessions=373&sfid=a0a1K00000HpjjMQAR&force=true&dc=DM2020SEI40',
    commands: [portalCommands],
    elements: {
        // These selectors are for the account creation page.
        FName: '[name="firstName"]',
        LName: '[name="lastName"]',
        email: '[name="email"]',
        pass: '[name="password"]',
        createButton: {
            selector: '//button[text()="CREATE ACCOUNT"]',
            locateStrategy: 'xpath'
        },
        DMLogo: '[alt="Devmountain Logo"]',

        // These selectors are for the home page after creating the account.
        currentApp: {
            selector: '((//section)[3]/div)[1]',
            locateStrategy: 'xpath'
        },
        beginButton: {
            selector: '(//button)[3]',
            locateStrategy: 'xpath'
        }
    }
}
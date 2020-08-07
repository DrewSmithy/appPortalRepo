var portalCommands = {
    /**
     * 
     * @param {object} data The object will need to be formatted like this: {edu: '@selector', field: 'Your Field of Study here'}
     * For the "edu" parameter in your object you can choose between 3
     */
    edu: function (data) {
        this
            .click(data.edu)
            .setValue('@fieldOfStudy', data.field)
            .click('@htmlAndCss')
            .click('@javascript')
            .click('@github')
            .click('@sql')
            .setValue('@hoursText', 'Literally Devmountain lol')
            .click('@continue')
        return this
    }
}
module.exports = {
    url: 'https://devmountain.com/application?sessions=373&sfid=a0a1K00000HpjjMQAR&force=true&dc=DM2020SEI40',
    commands: [portalCommands],
    elements: {
        
        // The next selectors are for the "Education" page.
        highSchool: 'select option[value="High School"]',
        someCol: 'select option[value="Some College"]',
        associate: 'select option[value="Associates"]',
        bachelor: 'select option[value="Bachelors"]',
        masters: 'select option[value="Masters"]',
        phd: 'select option[value="PHD"]',
        fieldOfStudy: '[name="fieldOfStudy"]',


        // The next selectors are for the section where you choose "Any that you have experience with".
        htmlAndCss: '[id="experience.htmlCss"]',
        javascript: '[id="experience.javascript"]',
        github: '[id="experience.github"]',
        react: '[id="experience.react"]',
        sql: '[id="experience.sql"]',
        node: '[id="experience.node"]',
        comSci: '[id="experience.computerScience"]',
        hours: '[name="hoursSpent"]',
        hoursText: '[name="hoursSpentType"]',

        // These are the "Save & Continue" and "Close" buttons.
        continue: {
            selector: '//button[contains(text(),"Save")]',
            locateStrategy: 'xpath'
        },
        closeButton: {
            selector: '//a[text()="Close"]',
            locateStrategy: 'xptah'
        }
    }
}
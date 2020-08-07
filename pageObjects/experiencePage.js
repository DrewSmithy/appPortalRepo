var portalCommands = {
    
}
module.exports = {
    url: 'https://devmountain.com/application?sessions=373&sfid=a0a1K00000HpjjMQAR&force=true&dc=DM2020SEI40',
    commands: [portalCommands],
    elements: {

        // These next selectors are for the "Experience" page.
        xp1Collapse: {
            selector: '(//button)[2]',
            locateStrategy: 'xpath'
        },
        xp1Pos: '[name="workExperience.0.position"]',
        xp1Months: '[name="workExperience.0.duration"]',
        xp1Description: '[name="workExperience.0.description"]',
        xp2Collapse: {
            selector: '(//button)[5]',
            locateStrategy: 'xpath'
        },
        xp2Pos: '[name="workExperience.1.position"]',
        xp2Months: '[name="workExperience.1.duration"]',
        xp2Description: '[name="workExperience.1.description"]',

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
var portalCommands = {
    goal: function (data) {
        this
            .setValue('@myGoals', data.myGoal)
            .click(data.heard1)
            .click(data.heard2)
            .click(data.heard3)
            .click('@other')
            .setValue('@otherInput', data.otherText)
            .click('@iUnderstand')
        return this
    }
}
module.exports = {
    url: 'https://devmountain.com/application?sessions=373&sfid=a0a1K00000HpjjMQAR&force=true&dc=DM2020SEI40',
    commands: [portalCommands],
    elements: {

        // These next selectors are for the "Goals" page.
        myGoals: '[name="goals"]',

        // These selectors are for the "How did you hear about Devmountain?" section
        fb: '[name="hearAbout.facebook"]',
        webSearch: '[name="hearAbout.webSearch"]',
        insta: '[name="hearAbout.instagram"]',
        friend: '[name="hearAbout.friendOrRelative"]',
        youtube: '[name="hearAbout.youtube"]',
        courseReport: '[name="hearAbout.courseReport"]',
        twitter: '[name="hearAbout.twitter"]',
        switchUp: '[name="hearAbout.switchUp"]',
        linkedIn: '[name="hearAbout.linkedin"]',
        other: '[name="hearAbout.other"]',
        otherInput: '[name="hearAbout.otherDetail"]',
        iUnderstand: '#acknowledgement',

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
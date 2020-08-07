var portalCommands = {
    /**
         * @param {object} data {address: '', city: '', state: '', zip: '', phone: '', housing: '', bday: '', gender: '', moveOn: ''} This will be the info you want to pass as this test's contact information.
         * For the housing property in your object you can choose from 3 options, '@notInterested', '@interested', and '@iNeedIt'.
         * For the gender property in your object you can choose from 3 options, '@genderF', '@genderM', and '@genderNB'.
         * For the bday property in your object it will need to be formatted like this 'MM/DD/YYYY'
         * for the moveOn property in your object you can choose from 2 options, '@closeButton', and '@continue'
         */
    contact: function (data) {
        this
            .expect.element('@conInfo').text.equal('CONTACT INFORMATION')
        this
            .setValue('@address', data.address)
            .setValue('@city', data.city)
            .setValue('@state', data.state)
            .setValue('@zip', data.zip)
            .setValue('@phone', data.phone)
            .click(data.housing)
            .setValue('@bDay', data.bday)
            .click(data.gender)
            .click(data.moveOn)
        return this
    }
}
module.exports = {
    url: 'https://devmountain.com/application?sessions=373&sfid=a0a1K00000HpjjMQAR&force=true&dc=DM2020SEI40',
    commands: [portalCommands],
    elements: {
        // These selectors will be used for the "Contact" section.
        conInfo: {
            selector: '//h2[text()="Contact Information"]',
            locateStrategy: 'xpath'
        },
        address: '[name="mailingAddress1"]',
        city: '[name="city"]',
        state: '[name="region"]',
        zip: '[name="postalCode"]',
        phone: '[name="phone"]',

        // These next 3 selectors are for housing options on the "Contact" page.
        notInterested: '#notInterested',
        interested: '#interested',
        iNeedIt: '#mustHave',

        bDay: '[name="birthday"]',
        genderF: 'select option[value="f"]',
        genderM: 'select option[value="m"]',
        genderNB: 'select option[value="Non-binary"]',

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
// This is the master file for my pgaeObjects/Custom Commands. All selectors and commands will be stored here in case I missed a selector in another pageObject.


// var portalCommands = {
//     /**
//      * @param {object} data {fName: '', lName: '', email: '', pass: ''} The object will need to have the desired credentials
//      */
//     create: function (data) {
//         this
//             .api.url(data.url)
//         this
//             .waitForElementVisible('@DMLogo')
//             .setValue('@FName', data.fName)
//             .setValue('@LName', data.lName)
//             .setValue('@email', data.email)
//             .setValue('@pass', data.pass)
//             .verify.containsText('@createButton', 'CREATE')
//             .click('@createButton')
//         return this
//     },
//     /**
//      * @param {string} course This will need to be the name of the course desired.
//      */
//     whatCourse: function (course) {
//         var self = this
//         this
//             .waitForElementVisible('@currentApp')
//             .getText('@currentApp', result => {
//                 self
//                     .assert.ok(result.value = course)
//                 if (result.value = course) {
//                     console.log('It is the correct course!')
//                 }
//                 else {
//                     console.log('Wrong course')
//                 }
//             })
//         return this
//     },
//     /**
//      * @param {object} data {address: '', city: '', state: '', zip: '', phone: '', housing: '', bday: '', gender: '', moveOn: ''} This will be the info you want to pass as this test's contact information.
//      * For the housing property in your object you can choose from 3 options, '@notInterested', '@interested', and '@iNeedIt'.
//      * For the gender property in your object you can choose from 3 options, '@genderF', '@genderM', and '@genderNB'.
//      * For the bday property in your object it will need to be formatted like this 'MM/DD/YYYY'
//      * for the moveOn property in your object you can choose from 2 options, '@closeButton', and '@continue'
//      */
//     contact: function (data) {
//         this
//             .expect.element('@conInfo').text.equal('CONTACT INFORMATION')
//         this
//             .setValue('@address', data.address)
//             .setValue('@city', data.city)
//             .setValue('@state', data.state)
//             .setValue('@zip', data.zip)
//             .setValue('@phone', data.phone)
//             .click(data.housing)
//             .setValue('@bDay', data.bday)
//             .click(data.gender)
//             .click(data.moveOn)
//         return this
//     },
//     edu: function (data) {
//         this
//             .click(data.edu)
//             .setValue('@fieldOfStudy', data.field)
//             .click('@htmlAndCss')
//             .click('@javascript')
//             .click('@github')
//             .click('@sql')
//             .setValue('@hoursText', 'Literally Devmountain lol')
//             .click('@continue')
//         return this
//     },
//     exp: function () {
//         this
//             .setValue()
//     },
//     goal: function (data) {
//         this
//             .setValue('@myGoals', data.myGoal)
//             .click(data.heard1)
//             .click(data.heard2)
//             .click(data.heard3)
//             .click('@other')
//             .setValue('@otherInput', data.otherText)
//             .click('@iUnderstand')
//         return this
//     }
// }
// module.exports = {
//     set setUrl(url) {
//         this.url = url
//     },
//     url: 'https://devmountain.com/application?sessions=373&sfid=a0a1K00000HpjjMQAR&force=true&dc=DM2020SEI40',
//     commands: [portalCommands],
//     elements: {
//         // These are the "Save & Continue" and "Close" buttons.
//         continue: {
//             selector: '//button[contains(text(),"Save")]',
//             locateStrategy: 'xpath'
//         },
//         closeButton: {
//             selector: '//a[text()="Close"]',
//             locateStrategy: 'xptah'
//         },

//         // These selectors are for the account creation page.
//         FName: '[name="firstName"]',
//         LName: '[name="lastName"]',
//         email: '[name="email"]',
//         pass: '[name="password"]',
//         createButton: {
//             selector: '//button[text()="CREATE ACCOUNT"]',
//             locateStrategy: 'xpath'
//         },
//         DMLogo: '[alt="Devmountain Logo"]',

//         // These selectors are for the home page after creating the account.
//         currentApp: {
//             selector: '((//section)[3]/div)[1]',
//             locateStrategy: 'xpath'
//         },
//         beginButton: {
//             selector: '(//button)[3]',
//             locateStrategy: 'xpath'
//         },

//         // These selectors will be used for the "Contact" section.
//         conInfo: {
//             selector: '//h2[text()="Contact Information"]',
//             locateStrategy: 'xpath'
//         },
//         address: '[name="mailingAddress1"]',
//         city: '[name="city"]',
//         state: '[name="region"]',
//         zip: '[name="postalCode"]',
//         phone: '[name="phone"]',

//         // These next 3 selectors are for housing options on the "Contact" page.
//         notInterested: '#notInterested',
//         interested: '#interested',
//         iNeedIt: '#mustHave',

//         bDay: '[name="birthday"]',
//         genderF: 'select option[value="f"]',
//         genderM: 'select option[value="m"]',
//         genderNB: 'select option[value="Non-binary"]',

//         // The next selectors are for the "Education" page.
//         highSchool: 'select option[value="High School"]',
//         someCol: 'select option[value="Some College"]',
//         associate: 'select option[value="Associates"]',
//         bachelor: 'select option[value="Bachelors"]',
//         masters: 'select option[value="Masters"]',
//         phd: 'select option[value="PHD"]',
//         fieldOfStudy: '[name="fieldOfStudy"]',


//         // The next selectors are for the section where you choose "Any that you have experience with".
//         htmlAndCss: '[id="experience.htmlCss"]',
//         javascript: '[id="experience.javascript"]',
//         github: '[id="experience.github"]',
//         react: '[id="experience.react"]',
//         sql: '[id="experience.sql"]',
//         node: '[id="experience.node"]',
//         comSci: '[id="experience.computerScience"]',
//         hours: '[name="hoursSpent"]',
//         hoursText: '[name="hoursSpentType"]',

//         // These next selectors are for the "Experience" page.
//         xp1Collapse: {
//             selector: '(//button)[2]',
//             locateStrategy: 'xpath'
//         },
//         xp1Pos: '[name="workExperience.0.position"]',
//         xp1Months: '[name="workExperience.0.duration"]',
//         xp1Description: '[name="workExperience.0.description"]',
//         xp2Collapse: {
//             selector: '(//button)[5]',
//             locateStrategy: 'xpath'
//         },
//         xp2Pos: '[name="workExperience.1.position"]',
//         xp2Months: '[name="workExperience.1.duration"]',
//         xp2Description: '[name="workExperience.1.description"]',

//         // These next selectors are for the "Goals" page.
//         myGoals: '[name="goals"]',
//         // These selectors are for the "How did you hear about Devmountain?" section
//         fb: '[name="hearAbout.facebook"]',
//         webSearch: '[name="hearAbout.webSearch"]',
//         insta: '[name="hearAbout.instagram"]',
//         friend: '[name="hearAbout.friendOrRelative"]',
//         youtube: '[name="hearAbout.youtube"]',
//         courseReport: '[name="hearAbout.courseReport"]',
//         twitter: '[name="hearAbout.twitter"]',
//         switchUp: '[name="hearAbout.switchUp"]',
//         linkedIn: '[name="hearAbout.linkedin"]',
//         other: '[name="hearAbout.other"]',
//         otherInput: '[name="hearAbout.otherDetail"]',
//         iUnderstand: '#acknowledgement'
//     }
// }
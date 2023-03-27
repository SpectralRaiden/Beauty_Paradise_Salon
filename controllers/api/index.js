const { google } = require('googleapis')

const { OAuth2 } = google.auth

const oAuth2Client = new OAuth




const calendar = google.calendar({ version: 'v3', auth: oAuth2Client })

const eventStartTime = new Date()
eventStartTime.setDate(eventStartTime.getDay() + 2)

const eventEndTime = new Date()
eventEndTime.setDate(eventEndTime.getDay() + 2)
eventEndTime.setMinutes(eventEndTime.getMinutes() + 45)

const event = {
   summary: 'Meet with loctician'
   location: 'Address'
   description: 
    'Meeting with loctician for hair appointment'
   start: {
    dateTime: eventStartTime,
    timeZone: 'America/Denver',
   },
   colorId: 1,
}

calendar.freebusy.query({
     resource: {
        timeMin: eventStartTime
        timeMax: eventEndTime
        timeZone: 'America/Denver',
        items: 
     }
})
(err, res) => {}
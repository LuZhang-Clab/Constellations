let express = require('express');
let app = express();

let Constellations = {

    "data": [
        {
            "Name": "Aries",
            "birth dates": "March 21 – April 19",
            "ProfileImage": "Aries.jpg"
        },

        {
            "Name": "Taurus",
            "birth dates": "April 20 – May 20",
            "ProfileImage": "Taurus.jpg"
        },

        {
            "Name": "Gemini",
            "birth dates": "May 21 – June 20",
            "ProfileImage": "Gemini.jpg"
        },

        {
            "Name": "Cancer",
            "birth dates": "June 21 – July 22",
            "ProfileImage": "Cancer.jpg"
        },

        {
            "Name": "Leo",
            "birth dates": "July 23 – August 22",
            "ProfileImage": "Leo.jpg"
        },

        {
            "Name": "Virgo",
            "birth dates": "August 23 – September 22",
            "ProfileImage": "Virgo.jpg"
        },

        {
            "Name": "Libra",
            "birth dates": "September 23 – October 22",
            "ProfileImage": "Libra.jpg"
        },

        {
            "Name": "Scorpio",
            "birth dates": "October 23 – November 21",
            "ProfileImage": "Scorpio.jpg"
        },

        {
            "Name": "Sagittarius",
            "birth dates": "November 22 – December 21",
            "ProfileImage": "Sagittarius.jpg"
        },

        {
            "Name": "Capricorn",
            "birth dates": "December 22 – January 19",
            "ProfileImage": "Capricorn.jpg"
        },

        {
            "Name": "Aquarius",
            "birth dates": "January 20 – February 18",
            "ProfileImage": "Aquarius.jpg"
        },

        {
            "Name": "Pisces",
            "birth dates": "February 19 – March 20",
            "ProfileImage": "Pisces.jpg"
        }

    ]


}

app.use('/', express.static('Constellations'));

app.get('/data', (request, response) => {
    response.json(Constellations);
})

app.listen(3000, () => {
    console.log("listen");

})
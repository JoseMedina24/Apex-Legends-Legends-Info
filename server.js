const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

const rappers = {
    'ash': {
        'age': 121,
        'realName': 'Dr. Ashleigh Reid',
        'homeWorld': 'Unknown',
        'tacticalAbility': 'Arc Snare',
        'passiveAbility': 'Marked For Death',
        'ultimateAbility': 'Phase Breach'
    },
    'bangalore': {
        'age': 29,
        'realName': '	Anita Williams',
        'homeWorld': 'Gridiron',
        'tacticalAbility': 	'Smoke Launcher',
        'passiveAbility': '	Double Time',
        'ultimateAbility': 'Rolling Thunder'
    },
    'bloodhound': {
        'age': 'Unknown',
        'realName': 'Unknown',
        'homeWorld': 'Talos',
        'tacticalAbility': 'Eye of the Allfather',
        'passiveAbility': 'Tracker',
        'ultimateAbility': 'Beast of the Hunt'
    },
    'caustic': {
        'age': 48,
        'realName': 'Alexander Nox',
        'homeWorld': 'Gaea',
        'tacticalAbility': '	Nox Gas Trap',
        'passiveAbility': '	Nox Vision',
        'ultimateAbility': 'Beast of the Hunt'
    },
    'crypto': {
        'age': 29,
        'realName': 'Sheyaa Bin Abraham-Joseph',
        'homeWorld': 'London, England',
        'tacticalAbility': 'Arc Snare',
        'passiveAbility': 'Marked For Death',
        'ultimateAbility': 'Phase Breach'
    },
    'fuse': {
        'age': 29,
        'realName': 'Sheyaa Bin Abraham-Joseph',
        'homeWorld': 'London, England',
        'tacticalAbility': 'Arc Snare',
        'passiveAbility': 'Marked For Death',
        'ultimateAbility': 'Phase Breach'
    },
    'gribraltar': {
        'age': 29,
        'realName': 'Sheyaa Bin Abraham-Joseph',
        'homeWorld': 'London, England',
        'tacticalAbility': 'Arc Snare',
        'passiveAbility': 'Marked For Death',
        'ultimateAbility': 'Phase Breach'
    },
    'horizon': {
        'age': 29,
        'realName': 'Sheyaa Bin Abraham-Joseph',
        'homeWorld': 'London, England',
        'tacticalAbility': 'Arc Snare',
        'passiveAbility': 'Marked For Death',
        'ultimateAbility': 'Phase Breach'
    },
    'lifeline': {
        'age': 29,
        'realName': 'Sheyaa Bin Abraham-Joseph',
        'homeWorld': 'London, England',
        'tacticalAbility': 'Arc Snare',
        'passiveAbility': 'Marked For Death',
        'ultimateAbility': 'Phase Breach'
    },
    'loba': {
        'age': 29,
        'realName': 'Sheyaa Bin Abraham-Joseph',
        'homeWorld': 'London, England',
        'tacticalAbility': 'Arc Snare',
        'passiveAbility': 'Marked For Death',
        'ultimateAbility': 'Phase Breach'
    },
    'mad Maggie': {
        'age': 29,
        'realName': 'Sheyaa Bin Abraham-Joseph',
        'homeWorld': 'London, England',
        'tacticalAbility': 'Arc Snare',
        'passiveAbility': 'Marked For Death',
        'ultimateAbility': 'Phase Breach'
    },
    'mirage': {
        'age': 29,
        'realName': 'Sheyaa Bin Abraham-Joseph',
        'homeWorld': 'London, England',
        'tacticalAbility': 'Arc Snare',
        'passiveAbility': 'Marked For Death',
        'ultimateAbility': 'Phase Breach'
    }, 
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    if ( rappers[rapperName] ) {
        response.json(rappers[rapperName]);
    } else {
        response.json(rappers['unknown'])
    }

    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}! Betta GO Catch IT!`)
})
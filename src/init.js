const axios = require('axios');
const fs = require('fs');
const path = require('path');

const url = 'https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json';
const dataFilePath = path.join(__dirname, 'data', 'dummyData.json');

axios.get(url)
    .then(response => {
        fs.writeFileSync(dataFilePath, JSON.stringify(response.data, null, 2));
        console.log('Dummy data has been fetched and stored successfully.');
    })
    .catch(error => {
        console.error('Error fetching the dummy data:', error);
    });

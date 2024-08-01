const fs = require('fs');
const path = require('path');
const dataFilePath = path.join(__dirname, 'data', 'dummyData.json');

let dummyData = [];
if (fs.existsSync(dataFilePath)) {
    const rawData = fs.readFileSync(dataFilePath);
    dummyData = JSON.parse(rawData);
}

const express = require('express');
const app = express();
const port = 3000;

app.get('/api/data', (req, res) => {
    let filteredData = dummyData;


    const { filterField, filterValue } = req.query;
    if (filterField && filterValue) {
        filteredData = filteredData.filter(item => item[filterField] === filterValue);
    }

    const { sortField, sortOrder } = req.query;
    if (sortField) {
        const sortFields = Array.isArray(sortField) ? sortField : [sortField];
        const sortOrders = Array.isArray(sortOrder) ? sortOrder : [sortOrder];

        filteredData.sort((a, b) => {
            for (let i = 0; i < sortFields.length; i++) {
                const field = sortFields[i];
                const order = sortOrders[i] || 'asc';

                if (a[field] < b[field]) {
                    return order === 'asc' ? -1 : 1;
                }
                if (a[field] > b[field]) {
                    return order === 'asc' ? 1 : -1;
                }
            }
            return 0;
        });
    }

    res.json(filteredData);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

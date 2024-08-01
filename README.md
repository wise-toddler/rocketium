# Node.js Dummy JSON Data Project 

## Overview

This project sets up a Node.js server using Express to serve dummy JSON data. It includes functionality to fetch the data from an external URL, store it locally, and create API endpoints for serving, filtering, and sorting the data.

## Features

- Fetches dummy JSON data from an external URL.
- Stores the data locally for efficient access.
- Provides an API endpoint to serve the data.
- Supports basic filtering and sorting of the data.

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/wise-toddler/ROCKETIUM.git
   cd ROCKETIUM
   ```

2. **Install Dependencies**

   Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

### Running the Project

1. **Initialize the Data**

   Before starting the server, you need to fetch and store the dummy JSON data. Run the following command:

   ```bash
   npm run init
   ```

   This script fetches the data from the external URL and saves it locally.

2. **Start the Server**

   Once the data is initialized, start the Express server by running:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000`.

### API Endpoints

- **Get All Data**

  `GET /api/data`

  Returns the entire JSON data.

- **Filter Data**

  `GET /api/data?filterField=<field>&filterValue=<value>`

  Filters the data based on the specified field and value.

- **Sort Data**

  `GET /api/data?sortField=<field>&sortOrder=<asc|desc>`

  Sorts the data based on the specified field and order.

- **Filter and Sort Data**

  `GET /api/data?filterField=<field>&filterValue=<value>&sortField=<field>&sortOrder=<asc|desc>`

  Filters and sorts the data based on the provided parameters.

- **Filter and Sort on Multiple data**
  `GET /api/data?filerFiled=<field>&filterValue=<value>&sortField=<field>&sortOrder=<asc|desc>&filterField=<field>&filterValue=<value>&sortField=<field>&sortOrder=<asc|desc>`

    Filters and sorts the data based on the provided parameters.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

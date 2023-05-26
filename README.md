# Live-data-from-API-Feed


This project demonstrates how to read live data from an API at regular intervals using JavaScript with the `axios` library. It provides an example implementation of fetching data from a specified API URL every N seconds.

## Prerequisites

To run this project, you need to have the following installed on your machine:

- Node.js (>=10.16.0)
- npm (Node Package Manager)

## Installation

1. Clone this repository to your local machine or download the source code as a ZIP file and extract it.

2. Open a terminal or command prompt and navigate to the project directory.

3. Install the project dependencies by running the following command:
    
    <code>npm install express axios</code>

## Running locally

On terminal run the following command to start the server locally: 

<code>node index.js</code>

## Customization

- To change the API URL:
    - Open the `index.js` file.
    - Modify the `url` variable to the desired API URL.

- To adjust the timer duration:
    - Open the `index.js` file.
    - Modify the argument passed to the `readLiveData` function.

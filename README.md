# MobileApp_API

This project is a basic API with MySQL database integration.

## Project Summary

This project provides a basic API that interacts with a MySQL database. It includes CRUD operations for managing data.

## Key Features

- Basic API setup with Node.js and Express
- MySQL database integration
- CRUD operations (Create, Read, Update, Delete)

## Setup Instructions

### Prerequisites
  
- Node.js installed
- MySQL database setup

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/rabbihossainlhp/MobileApp_API.git


# District Information API

This is a simple API for managing district information. It allows you to create, update, retrieve, and delete district information.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the API](#running-the-api)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name 

2. Install the dependencies:
    ```bash
   npm install

3. environment variable should like this:

    ```bash
    DB_HOST=your_database_host
    DB_USER=your_database_user
    DB_PASSWORD=your_database_password
    DB_NAME=District_Info
    DB_PORT=3306
    PORT=3535

   # Replace the placeholder values with your actual database credentials.

##Running the API

1. Start the server:
    ```bash
   npm start
2. The server will be running at http://localhost:3535.

## API Endpoints
   The live API is hosted at: https://mobileappapi-production.up.railway.app/

   Create a District

    URL: /api/create-item
    Method: POST
    Body:
      {
        "name": "District Name",
        "description": "District Description"
      }
    
   Response:

      201 Created
      500 Internal Server Error


   Get single Items

    URL: /api/singleitem/:id
    Method: GET
   
    
   Response:
   
      201 Created
      404 Not Found
      500 Internal Server Error  


   Update single Items

    URL: /api/updateitem/:id
    Method: POST
        Body:
      {
        "name": "District Name",
        "description": "District Description"
      }  
   
    
   Response:
   
      201 Updated
      404 Not Found
      500 Internal Server Error  


   Delete single Items

    URL: /api/updateitem/:id
    Method: POST
        Body:
      {
        "name": "District Name",
        "description": "District Description"
      }  
   
    
   Response:
   
      201 Deleted
      404 Not Found



  Get all Items

    URL: /api/allitem/
    Method: GET
   
    
   Response:
   
      201 SuccessFully founded all info
      404 Not Found
   
# Grailed Store data REST API

This is a simple REST API to get grailed store data. It runs on port 3000 by default but may be configured in the environment.

## Requirements

    node
    typescript

## Install

    npm install

## Run the app

    npm run start

# REST API

## Get store data

### Request

### Request

`GET /data/:name`

    curl --location 'http://localhost:3000/data/juravel_vintage'

### Response

```
[
    {
        photo:
        'https://i0.wp.com/picjumbo.com/wp-content/uploads/man-looking-at-heart-shaped-explosion-free-photo.jpg?w=2210&quality=70',
        title: 'title',
        price: 23456,
        condition: 'new',
        size: 'M',
    }
],
```

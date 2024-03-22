# URL Shortener Project README

Welcome to the URL Shortener project! This project allows you to shorten long URLs into more manageable, shorter ones.

# Output Video Presentation
[Output Video Presentation](https://drive.google.com/file/d/1lMVi1mkVu1l68JNZAzd8RhXqDtYEBxwj/view?usp=sharing)

## Project Overview

This project provides a full-stack URL shortening service similar to popular services like [tinyurl.com](http://tinyurl.com) or [bitly.com]. It consists of a backend server built with Node.js and Express, and uses Redis as a data store for storing URL mappings.

## Installation and Setup

1. Clone this repository to your local machine:

    ```
    git clone <repository_url>
    ```

2. Navigate into the project directory:

    ```
    cd url-shortener
    ```

3. Install dependencies:

    ```
    npm install
    ```

4. Start the server:

    ```
    npm start
    ```

## Endpoints

### Shorten URL

- **Endpoint**: `/original`
- **Method**: `POST`
- **Description**: Takes a long URL as input and generates a shorter URL.
- **Request Body**:
  ```json
  {
      "originalURL": "https://example.com/your/long/url"
  }




![Screenshot](Screenshot%20(2162).png)



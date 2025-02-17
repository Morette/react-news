# News List Application

Simple React application built using Vite as the bundler and pnpm as the package manager. The app fetches and displays a list of news articles from an API.

## Tech Stack

- React: JavaScript library for building user interfaces.
- Vite: Next-generation, fast build tool.
- pnpm: Fast and disk space-efficient package manager.

## Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v16 or higher recommended)
- pnpm - Package manager -- Install via npm: npm install -g pnpm

## Installation

1. Clone the repository:

`git clone https://github.com/your-username/news-list-app.git`

2. Navigate to the project directory:

`cd news-list-app`

3. Install dependencies with pnpm:

`pnpm install`

## Running the project

### Development

To start the development server, run:

`pnpm dev`

### With Docker

```
docker build -t react-news .

docker run --rm -p 3000:3000 news-filtering:latest
```

## Environment Variables

The app uses an API to fetch news articles. To use the API, set your environment variables in .env file in the root directory:

```
VITE_NEWS_API_KEY=your-api-key
```

Make sure to replace your-api-key with a valid key from a news API like [NewsAPI](https://newsapi.org/).

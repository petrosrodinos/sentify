# Sentyfi API 🚀

> **Real-time Twitter sentiment analysis for cryptocurrency and stock market insights**

Sentyfi API is a powerful NestJS-based service that integrates Twitter's API to fetch real-time tweets from selected accounts. These tweets are analyzed using AI to detect potential market impact for your portfolio assets, helping users make informed decisions in volatile markets.

## ✨ Features

- 🔍 **Real-time Twitter Monitoring** - Track tweets from crypto influencers and financial accounts
- 🤖 **AI-Powered Sentiment Analysis** - Analyze tweet sentiment and market impact
- 📊 **Portfolio Integration** - Get personalized notifications about assets in your portfolio
- 🔔 **Smart Notifications** - Receive alerts when tweets might influence your investments
- 📱 **Multi-channel Notifications** - Email, SMS, Telegram notifications

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- Redis
- PostgreSQL

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd sentyfi-api
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   ```bash
   cp .env.template .env.local
   # Edit .env with your configuration
   ```

4. **Database Setup**

   ```bash
   # Run database migrations
   npm run migrate:local

   # Start Prisma Studio (optional)
   npm run studio:local
   ```

5. **Start the application**

   ```bash
   # Local mode
   npm run start:local

    # Development mode
   npm run start:dev

   # Production mode
   npm run start:prod
   ```

## 🗄️ Database Management

### Prisma Commands

```bash
# Run migrations
npm run migrate:local    # Local environment
npm run migrate:dev      # Development environment
npm run migrate:prod     # Production environment

# Open Prisma Studio
npm run studio:local     # Local environment
npm run studio:dev       # Development environment
npm run studio:prod      # Production environment
```

## 🔧 Development

### Available Scripts

```bash

# Local
npm run start:local       # Start in production mode

# Development
npm run start:dev        # Start in development mode
npm run start:debug      # Start with debugging enabled

# Production
npm run start:prod       # Start in production mode

# Building
npm run build           # Build the application
```

## 📊 API Documentation

### GraphQL Playground

Access the GraphQL playground at: http://localhost:3000/graphql

### OpenAPI Documentation

Access the OpenAPI/Swagger documentation at: http://localhost:3000/api

## 🔌 Integrations

### External Services

- **Twitter API v2** - Real-time tweet streaming and historical data access
- **OpenAI API** - GPT-based sentiment analysis and market impact predictions
- **Polygon API** - Real-time stock and crypto market data feeds
- **SendGrid** - Transactional email notifications and alerts
- **Twilio** - SMS notifications and phone verification
- **Telegram Bot API** - Instant messaging notifications and commands

### Database & Cache

- **PostgreSQL** - Primary database (via Prisma)
- **Redis** - Caching and session management

## 🛠️ Local Development Setup

### Redis Setup (Windows WSL)

```bash
# Open WSL
wsl

# Install Redis
sudo apt update
sudo apt install redis-server

# Start Redis service
sudo service redis-server start

# Test connection
redis-cli ping
# Should return: PONG
```

**Built with ❤️ using NestJS, Prisma, and TypeScript**

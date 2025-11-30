## Backly 🚀

Interactive cli backend starter for Node.js applications.

## what is backly?

Backly is a cli tool that helps you to create a backend project, file structure and required dependencies with a simple command depending on your template.

## Features

🎯 **6 Professional Templates** - From minimal to advanced architectures  
📦 **JavaScript & TypeScript** - Full support for both languages  
⚡ **Zero Configuration** - Works out of the box  
🛠️ **Flexible** - Start simple, scale as needed

## Quick start
```bash
    npx backly
```

## For global users
```bash
npm i -g backly
## initialize your project
backly init
```

That's it! The CLI will guide you through:
1. Choosing your language (JavaScript or TypeScript)
2. Selecting a template
3. Naming your project
4. Automatic dependency installation

## Templates

### 🔹 core
Minimal Express server with basic routing. Perfect for learning or simple APIs.
- Express.js
- CORS
- Environment variables
- Basic route structure

### 🔹 base
Production-ready starter with authentication and database.
- JWT authentication
- MongoDB with Mongoose
- Password hashing (bcrypt)
- MVC architecture
- Error handling middleware

### 🔹 prime
Advanced architecture for scalable applications.
- Everything in `base` +
- Role-Based Access Control (RBAC)
- Service layer pattern
- Repository pattern
- Custom error classes
- Utility functions

### 🔹 commerce
E-commerce backend foundation.
- Product, Cart, Order, Category models
- Inventory management
- Filtering utilities
- Payment handler placeholder

### 🔹 content
Blog/CMS starter kit.
- Post, Comment, Category models
- CRUD operations
- Slug generation
- Pagination utilities

### 🔹 social
Social media backend.
- User profiles
- Posts, Likes, Follows
- Basic feed system
- Modular routing

## CLI Flags

For advanced users, skip prompts with flags:

```bash
# Use TypeScript
npx backly --ts

# Use JavaScript
npx backly --js

# Specify template
npx backly --template base

# Set project name
npx backly --name my-awesome-api

# Skip dependency installation
npx backly --no-install

# Combine flags
npx backly --ts --template prime --name my-api
```

## After Generation

```bash
cd your-project-name
npm run dev
```

## Requirements

- Node.js >= 14.0.0
- npm or yarn

## License

MIT

## Author

Sahil Mund
# backly

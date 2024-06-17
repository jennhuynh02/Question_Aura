# Question Aura

Welcome to Question Aura, a forum-like application that allows users to ask questions and respond to other users' questions, inspired by the functionality of Quora.

## What's New in Version 2

We're excited to introduce several improvements in Question Aura's tech stack for version 2. These changes enhance security, performance, and the overall developer experience. Here's a rundown of what's new:

### 1. Authentication with Devise
**Original**: Our initial version used a custom-built authentication system, utilizing bcrypt for password encryption and manual session management.

**v2 Improvement**:
- **Devise Integration**: We've integrated Devise, a robust and secure authentication solution that handles user registration, login, password recovery, and session management.
- **Benefits**: Enhanced security, reduced development time, and simplified maintenance.

### 2. Deployment on Netlify
**Original**: Hosted on Heroku.

**v2 Improvement**:
- **Netlify Deployment**: The frontend is now deployed on Netlify, which offers continuous deployment, custom domains, and a global CDN.
- **Benefits**: Faster deployment times, improved performance with a global CDN, and easier management.

### 3. Improved MVC Structure
**Original**: Manually managed MVC components.

**v2 Improvement**:
- **Rails Scaffolding**: We utilized Rails scaffolding to generate models, views, and controllers for `Question`, `Answer`, `Comment`, and `Topic`.
- **Benefits**: Quicker setup, standardized code structure, and enhanced productivity.

### 4. Enhanced Database Schema
**Original**: Manually defined schema with custom relationships and validations.

**v2 Improvement**:
- **Refined Schema Design**: We've updated the database schema to ensure efficient data relationships and indexing, with all necessary foreign keys and indexes in place.
  - Example:
    ```ruby
    create_table "questions", force: :cascade do |t|
      t.string "ask", null: false
      t.integer "asker_id", null: false, index: true
      t.integer "topic_id", null: false, index: true
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
    end
    add_foreign_key "questions", "users", column: "asker_id"
    add_foreign_key "questions", "topics"
    ```
- **Benefits**: Improved data integrity, faster query performance, and easier database management.

### 5. Modernized Development Environment
**Original**: Basic Rails environment setup with manual configuration.

**v2 Improvement**:
- **Environment Configuration**: Leveraged modern development tools and practices, including `.env` files for environment variables (using `dotenv-rails`) and Spring for faster test and development cycles.
- **Benefits**: Enhanced developer experience, better environment management, and quicker development iterations.

### 6. Testing and Continuous Integration
**Original**: Basic or no automated testing and CI.

**v2 Improvement**:
- **Automated Testing**: Implemented automated tests using Rails' built-in testing framework.
- **Continuous Integration**: Set up CI pipelines with GitHub Actions for automated testing and deployment.
- **Benefits**: Higher code quality, reduced manual testing effort, and continuous feedback on code changes.

### Summary

Version 2 of Question Aura brings significant enhancements to the tech stack, focusing on security, performance, and developer productivity. By integrating Devise for authentication, deploying on Netlify, leveraging Rails scaffolding, refining the database schema, modernizing the development environment, and implementing automated testing and CI, we've built a more robust, maintainable, and efficient application.

---

We hope you enjoy the new and improved Question Aura!

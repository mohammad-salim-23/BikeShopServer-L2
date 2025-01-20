# Blogging Platform Backend

## Project Overview
This project is the backend for a blogging platform that allows users to create, update, and delete their own blogs. The platform has two roles: **Admin** and **User**. 

- **Admin** can manage users and blogs, with special permissions like blocking users and deleting any blog.
- **Users** can perform CRUD operations on their blogs.

The system includes secure authentication, role-based access control, and a public API for viewing blogs with search, sort, and filter functionalities.

## Live URL
- Not applicable (backend only).

## Features
### Authentication & Authorization
- **User Authentication**: Secure login and registration with JWT.
- **Role-Based Authorization**: Different permissions for Admin and User roles.

### User Roles
1. **Admin**:
   - Manually created in the database with predefined credentials.
   - Can delete any blog.
   - Can block users by setting `isBlocked` to `true`.
   - Cannot update blogs.
2. **User**:
   - Can register and log in.
   - Can create, update, and delete their own blogs.
   - Cannot perform admin actions.

### Blog Management
- Users can perform CRUD operations on their blogs.
- Admin can delete any blog.

### Public Blog API
- Allows anyone to read blogs with the following features:
  - **Search**: Search blogs by title or content.
  - **Sort**: Sort blogs by fields like `createdAt` or `title` in ascending/descending order.
  - **Filter**: Filter blogs by author.

### Error Handling
- Comprehensive error handling with consistent response structures for:
  - Validation errors
  - Authentication and authorization errors
  - Not found errors
  - Internal server errors

## Technologies Used
- **Language**: TypeScript
- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JSON Web Tokens (JWT)

## Installation
1. Clone the repository:
   ```bash
   git clone <https://github.com/mohammad-salim-23/Assignment_3level2-_blog.git>
   ```
2. Navigate to the project directory:
   ```bash
   cd blogging-platform-backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
5. Start the server:
   ```bash
   npm run start:dev
   ```
6. The server will run at `http://localhost:5000`.

## API Endpoints
### Authentication
1. **Register User**: `POST /api/auth/register`
   - Registers a new user.

2. **Login User**: `POST /api/auth/login`
   - Authenticates a user and returns a JWT token.

### Blog Management
1. **Create Blog**: `POST /api/blogs`
   - Allows logged-in users to create blogs.

2. **Update Blog**: `PATCH /api/blogs/:id`
   - Allows logged-in users to update their own blogs.

3. **Delete Blog**: `DELETE /api/blogs/:id`
   - Allows logged-in users to delete their own blogs.

4. **Get All Blogs (Public)**: `GET /api/blogs`
   - Public API to fetch blogs with search, sort, and filter options.

### Admin Actions
1. **Block User**: `PATCH /api/admin/users/:userId/block`
   - Allows Admin to block a user.

2. **Delete Blog**: `DELETE /api/admin/blogs/:id`
   - Allows Admin to delete any blog.

## Models
### User Model
```typescript
{
  name: string;
  email: string;
  password: string;
  role: "admin" | "user"; // Default: "user"
  isBlocked: boolean; // Default: false
  createdAt: Date;
  updatedAt: Date;
}
```

### Blog Model
```typescript
{
  title: string;
  content: string;
  author: ObjectId; // Reference to User model
  isPublished: boolean; // Default: true
  createdAt: Date;
  updatedAt: Date;
}
```

## Error Response Structure
To ensure consistency, all errors follow this format:
```json
{
  "success": false,
  "message": "Error message",
  "statusCode": 400,
  "error": {
    "details": "Additional details, if any"
  },
  "stack": "Error stack trace, if applicable"
}
```

## Bonus Features
- **Validation**: Implemented with Zod for request payloads.
- **Logging**: Comprehensive error and request logging for better debugging.

## Contribution Guidelines
1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your forked repository:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For questions or suggestions, feel free to contact the project owner:
- **Name**: Mohammad Salim
- **Email**: mohammadsalim017427@gmail.com
- **Portfolio**: [https://storied-biscochitos-23d79c.netlify.app/](https://storied-biscochitos-23d79c.netlify.app/)

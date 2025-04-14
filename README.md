# Quiz 4 Tasks Solution

**Name**: Sakib Ahmed Shanto  
**ID**: 210041262


# React Task Management System

This project is a full-stack task management system built with React (frontend) and Node.js (backend). Below are the instructions to run the server and client, along with the API details.

---

## How to Run

### Server
1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run dev
   ```

### Client
1. Navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the client:
   ```bash
   npm run dev
   ```

---

## API Details

Here is the list of APIs you can test with Postman, along with the appropriate HTTP methods, endpoints, and example JSON payloads:

---

### **Authentication APIs**

1. **Register User**
   - **Method**: `POST`
   - **Endpoint**: `/api/v1/auth/register`
   - **JSON Payload**:
     ```json
     {
       "name": "John Doe",
       "email": "johndoe@example.com",
       "password": "password123"
     }
     ```

2. **Login User**
   - **Method**: `POST`
   - **Endpoint**: `/api/v1/auth/login`
   - **JSON Payload**:
     ```json
     {
       "email": "johndoe@example.com",
       "password": "password123"
     }
     ```

3. **Get User Profile**
   - **Method**: `GET`
   - **Endpoint**: `/api/v1/auth/profile`
   - **Headers**:
     ```json
     {
       "Authorization": "Bearer <your_token>"
     }
     ```

---

### **Task Management APIs**

1. **Add Task**
   - **Method**: `POST`
   - **Endpoint**: `/api/v1/task/add`
   - **Headers**:
     ```json
     {
       "Authorization": "Bearer <your_token>"
     }
     ```
   - **JSON Payload**:
     ```json
     {
       "title": "Complete React Project",
       "desc": "Finish the task management system"
     }
     ```

2. **Get All Tasks**
   - **Method**: `GET`
   - **Endpoint**: `/api/v1/task/get-all`
   - **Headers**:
     ```json
     {
       "Authorization": "Bearer <your_token>"
     }
     ```

3. **Delete Task by ID**
   - **Method**: `DELETE`
   - **Endpoint**: `/api/v1/task/delete/:id`
   - **Headers**:
     ```json
     {
       "Authorization": "Bearer <your_token>"
     }
     ```
   - **Example URL**: `/api/v1/task/delete/64b7f2e5c9d1a2b3c4d5e6f7`

4. **Edit Task by ID**
   - **Method**: `PUT`
   - **Endpoint**: `/api/v1/task/edit/:id`
   - **Headers**:
     ```json
     {
       "Authorization": "Bearer <your_token>"
     }
     ```
   - **Example URL**: `/api/v1/task/edit/64b7f2e5c9d1a2b3c4d5e6f7`

---

### **Error Handling**
- Test invalid routes or missing fields to ensure proper error handling.
- Example:
  - **Method**: `GET`
  - **Endpoint**: `/api/v1/invalid-route`
  - **Expected Response**:
    ```json
    {
      "StatusCode": 500,
      "message": "Route not found"
    }
    ```

---

### Notes
- Replace `<your_token>` with the actual JWT token obtained from the login API.
- Ensure the server is running on `http://localhost:3006` (default port) and the client on `http://localhost:5173` (default Vite port).

---


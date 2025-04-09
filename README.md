# Papyrus App

## Overview

## Features:

### Features for Users:

### Authentication & Authorization:

#### Admin and User roles are seperated. For creating, updating, deleting and blocking, User and Admin have to logged-in.

### Error Handlings:

#### Proper error handling for invalid input, invalid email, missing data, duplicate user, and unauthorized request.

### Technology Used:

## Project installation Locally .

1. Clone the repository:

```bash
# git clone link
```

2.  Go to the project directory and Install npm:

```bash
cd papyrus-server;
npm install;
```

3. To run this project you need Environment Variables. First create .env file in papyrus-server main directory and add these variables.

```env
NODE_ENV=development
PORT=5000
DATABASE_URL=
BCRYPT_SALT_ROUNDS=8
DEFAULT_PASSWORD=123456
SERVER_BASE_URL=
JWT_ACCESS_SECRET=473d601c7348ebc5ac129f5a47c2a64b8020db26dbf0f2e6e81841f3f8af4f409638ddd03969fbe791bfa1c3d44934821ab32cb56beb852b988a391c039a0e97
JWT_REFRESH_SECRET=016e6b54e7be2b04c423775746f85763aed383c0f9783a1b1b9d5924b6d029694ed782a0f28804838e7b1184056d796993e090de0cdaf44b09815c7ac4917f41
JWT_ACCESS_SECRET_EXPIRES_IN=5h
JWT_REFRESH_SECRET_EXPIRES_IN=30d
SP_ENDPOINT=https://sandbox.shurjopayment.com
SP_USERNAME=sp_sandbox
SP_PASSWORD=pyyk97hu&6u6
SP_PREFIX=SP
SP_RETURN_URL=https://sandbox.shurjopayment.com/response
```

### Scripts for manage this application.

1. To run this application in development:

```bash
npm run start:dev
```

2. To build this application:

```bash
npm run build
```

3. To Use lint to find problem:

```bash
npm run lint
```

4. To Use lint fix to auto fix problem:

```bash
npm run lint:fix
```

5. To format codes:

```bash
npm run prettier
```

## API Endpoints:

### For Authentication :

1. **Register User** :

```bash
/api/auth/register
Method: POST
```

2. **Login User** :

```bash
/api/auth/login
Method: POST
```

3. **Refresh Token** :

```bash
/api/auth/refresh-token
Method: POST
```

### User Related Actions :

1. **Get all user**:

```bash
/api/user
Method: GET
Request-Header: Authorization: Bearer <token>
```

2. **Get Single User**:

```bash
/api/user/userId
Method: GET
Request-Header: Authorization: Bearer <token>
```

3. **Update User**:

```bash
/api/user/userId
Method: POST
Request-Header: Authorization: Bearer <token>
```

### Product Related Actions :

1. **Created Product**:

```bash
/api/product
Method: POST
Request-Header: Authorization: Bearer <token>
```

2. **Get All Product**:

```bash
/api/product
Method: GET
```

3. **Get Single Product**:

```bash
/api/product/productId
Method: GET
Request-Header: Authorization: Bearer <token>
```

4. **Update Product**:

```bash
/api/product/productId
Method: PUT
Request-Header: Authorization: Bearer <token>
```

5. **Update Product**:

```bash
/api/product/productId
Method: PUT
Request-Header: Authorization: Bearer <token>
```

6. **Delete Product**:

```bash
/api/product/productId
Method: DELETE
Request-Header: Authorization: Bearer <token>
```

### Product Related Actions :

1. **Created Order**:

```bash
/api/order
Method: POST
Request-Header: Authorization: Bearer <token>
```

2. **Get All Order**:

```bash
/api/order
Method: GET
Request-Header: Authorization: Bearer <token>
```

3. **Get Order By User**:

```bash
/api/order/byUser/orderId
Method: GET
Request-Header: Authorization: Bearer <token>
```

4. **Get Single Order**:

```bash
/api/order/orderId
Method: GET
Request-Header: Authorization: Bearer <token>
```

### Admin Related Actions :

1.  **Deactivate User**:

```bash
/api/admin/user/UserId/deactivate
Method: PATCH
Request-Header: Authorization: Bearer <token>
```

2.  **Update Order Status**:

```bash
/api/order/orderId/status
Method: PATCH
Request-Header: Authorization: Bearer <token>
```

## Admin login crediential:

```bash
Email : admin@gmail.com,
Password : 123456
```

## Necessary Links:

1. **Live Links**:
2. **Github Link**:

# papyrus-server

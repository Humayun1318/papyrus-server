# Papyrus-server

## Overview:

## Features:

- 📝 **User Registration & Login**
  - JWT-based a
### Error Handlings:

#### Proper error handling for invalid input, invalid email, missing data, duplicate user, and unauthorized request.

1. Clone the repository:

```bash
 git clone https://github.com/rafiferdos/papyrus-server.git
```

2.  Go to the project directory and Install npm:

```bash
cd papyrus-server;
npm install;
```

SP_USERNAME=
SP_PASSWORD=
SP_PREFIX=
SP_RETURN_URL=
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
```

5. To format codes:

```bash
npm run prettier
```

## API Endpoints:

```bash
/api/auth/register


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

### Product Rela
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
3. **Get Product By Query**:

```bash
api/product?searchTe

```bash
/api/product/productId
Method: GET
```

5. **Update Product**:

```bash
/api/product/productId
Method: PUT
R
/api/product/productId
Method: DELETE
Request-Header: Authorization: Bearer <token>
```

### Product Related Actions :

1. **Create Order**:

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
Email: admin@gmail.com
Password: 123456
```

## Necessary Links:

1. **Live Links**: https://papyrus-server-lovat.vercel.app
2. **Github Link**: https://github.com/rafiferdos/papyrus-server.git



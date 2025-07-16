# VendorXpress_Backend
**VendorXpress** is a full-stack MERN application that allows vendors to register, manage their restaurants (firms), and add food products to their listings. It supports authentication, image uploads, and data linking between vendors, firms, and products.

## 🚀 Features
- Vendor registration and login with JWT authentication
- Add firms (restaurants) and associate them with vendors
- Upload firm and product images using `multer`
- Add products under firms with category/region tagging
- View all vendors and their associated firms
- RESTful API endpoints for vendors, firms, and products
- MongoDB relational linking via ObjectId referencing

## 🛠️ Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT + bcryptjs
- **File Uploads**: Multer
- **Environment**: dotenv
- **Testing Tools**: Postman

## 📦 Installation
1. Clone the repository:
```bash
git clone https://github.com/yourusername/VendorXpress.git
cd VendorXpress
```
2. Install backend dependencies:
```bash
npm install
```
3. Create a .env file in the root directory and add your environment variables:
```bash
MONGO_URI=your_mongodb_connection_string
MAGICALKEY=your_jwt_secret_key
```
4. Start the backend server:
```bash
npm run dev
```

## 🧪 API Endpoints

##  🔐 Vendor
| Endpoint                    | Method | Description             |
| --------------------------- | ------ | ----------------------- |
| `/vendor/register`          | POST   | Register new vendor     |
| `/vendor/login`             | POST   | Login and get JWT token |
| `/vendor/all-vendors`       | GET    | Get all vendors         |
| `/vendor/single-vendor/:id` | GET    | Get vendor by ID        |

## 🏢 Firm
| Endpoint                   | Method | Description                           |
| -------------------------- | ------ | ------------------------------------- |
| `/firm/add-firm`           | POST   | Add a new firm *(JWT Token required)* |
| `/firm/:firmId`            | DELETE | Delete a firm by ID                   |
| `/firm/uploads/:imageName` | GET    | View firm image                       |

## 🍕 Product
| Endpoint                       | Method | Description                |
| ------------------------------ | ------ | -------------------------- |
| `/product/add-product/:firmId` | POST   | Add a product under a firm |
| `/product/:firmId/products`    | GET    | Get products by firm ID    |
| `/product/:productId`          | DELETE | Delete product by ID       |
| `/product/uploads/:imageName`  | GET    | View product image         |

## 👨‍💻 Author
# Nagubandi Veera Venkata Varshith
  Built with passion and precision using MERN stack 🚀





https://bloodinventory-management.onrender.com

Fake Credentials:
Username: HOS005
Password: hopehosp

# Blood Inventory Management

[![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)](https://react.dev/)
[![Express](https://img.shields.io/badge/Backend-Express.js-green?logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?logo=mongodb)](https://www.mongodb.com/)
[![HTML5](https://img.shields.io/badge/Markup-HTML5-orange?logo=html5)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/Style-CSS3-blue?logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Bootstrap](https://img.shields.io/badge/UI-Bootstrap-purple?logo=bootstrap)](https://getbootstrap.com/)
[![Socket.io](https://img.shields.io/badge/Realtime-Socket.io-black?logo=socket.io)](https://socket.io/)
[![Render](https://img.shields.io/badge/Deployment-Render-lightgrey?logo=render)](https://render.com/)

---

[🚀 **Live Application (Demo Link)**](https://bloodinventory-management.onrender.com)

---

## 🔒 Demo Credentials

Use these test credentials to log in and explore all features:

```txt
Username: HOS005
Password: hopehosp
```

---

## 🛠 Tech Stack

- **Frontend:** React, HTML5, CSS3, Bootstrap
- **Backend:** Express.js (Node.js), Socket.io
- **Database:** MongoDB (via Mongoose)
- **Deployment:** Render.com

---

## ✨ Features

- **Donor & Recipient Registration:** Easy sign-up and management for both donors and recipients.
- **Hospital Authentication:** Secure hospital login and access control.
- **Real-Time Inventory Tracking:** Permanent blood stocks with live updates using Socket.io.
- **Sophisticated Dashboard:** Hospital admin dashboard with actionable views and metrics.
- **Blood Request & Matching:** Request blood types, donor matching, and geographic filtering.
- **Inventory Audit Logs:** Track all actions—additions, removals, changes.
- **Responsive UI:** Sleek, modern design accessible from any device.
- **Geolocation Features:** Map-based donor search and matching (OpenStreetMap integration).
- **Integration Module:** APIs and routes for future integrations and data exchange.
- **Secure Data Handling:** Sensitive info managed through environment configs and secured endpoints.

---

## 📁 Project Structure

```
Blood-Inventory-Management/
├── backend/
│   ├── controllers/        # Logic for recipients, donors, matching
│   ├── models/             # Mongoose data models
│   ├── routes/             # Express.js routes (REST APIs)
│   └── server.js           # Main Express server
├── public/
│   └── index.html          # App entry-point
├── src/
│   ├── components/         # React components (Dashboard, Request, Registry, MatchPage, Integration, Login)
│   ├── App.js              # Main React app
│   ├── index.js            # React DOM bootstrap
│   ├── index.css           # Base styles
│   └── ...                 # Additional React files and assets
├── package.json            # Node.js dependencies and scripts
├── .env.example            # Example environment config
├── README.md
└── ...
```

---

## 🚀 Getting Started

1. **Clone the repository**
    ```bash
    git clone https://github.com/Anish-0411/Blood-Inventory-Management.git
    cd Blood-Inventory-Management
    ```

2. **Install dependencies**
    ```bash
    # For backend
    cd backend
    npm install

    # For frontend
    cd ../
    npm install
    ```

3. **Configure Environment Variables**
    - Copy `.env.example` to `.env` and fill out required configs:
      - `MONGO_URI`
      - `CORS_ORIGIN`
      - Any additional secrets...

4. **Run Locally**
    - Start backend server:
      ```bash
      cd backend
      npm start
      ```
    - Start React frontend:
      ```bash
      npm start
      ```

5. **Access Locally**
    - Frontend: [http://localhost:3000](http://localhost:3000)
    - Backend API: [http://localhost:5000](http://localhost:5000) (by default)

---

## 💻 Demo Usage

- Visit the [Live Demo](https://bloodinventory-management.onrender.com).
- Log in with **Username:** `HOS005` / **Password:** `hopehosp`.
- Explore Dashboard, Register donors/recipients, request, match, and manage blood inventory.

---

## 🤝 Contributing

1. **Fork** the repo
2. **Create** a feature branch (`git checkout -b feature/my-new-feature`)
3. **Commit** your changes (`git commit -am 'Add new feature'`)
4. **Push** to your branch (`git push origin feature/my-new-feature`)
5. **Open** a Pull Request!

---

## 💬 Support & Discussions

- For issues, suggestions or questions, use [Issues](https://github.com/Anish-0411/Blood-Inventory-Management/issues).
- Pull requests and contributions are always welcome!

---

## 📄 License

Licensed under the MIT License.  
See the [LICENSE](LICENSE) file for more details.

---

## 🙏 Acknowledgments

- Thanks to all contributors, testers, and users!
- Made with ❤️ to simplify hospital blood inventory management.

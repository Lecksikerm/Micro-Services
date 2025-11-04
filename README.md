🚗 Uber-Service (Logging & Rider Coordinates Microservice)

A NestJS-based microservice designed to log and manage rider coordinates for an Uber-like system.
It uses MongoDB as the primary data store and communicates via NestJS microservice messaging (TCP transport) with other services (e.g., Rider Service).

🧩 Overview

The Uber-Service application handles logging of rider coordinates and fetching them on demand.
It’s a part of a distributed system where different microservices (e.g., Rider Service) communicate with each other using TCP-based NestJS microservices.

⚙️ Core Features

Store and retrieve rider GPS coordinates.

Communicate with the Rider microservice via TCP.

Built using NestJS, Mongoose, and MongoDB.

Follows clean, modular microservice architecture.

🏗️ Project Structure
uber-services/
│
├── apps/
│   ├── logging/                       # Logging microservice
│   │   ├── src/
│   │   │   ├── logging.module.ts
│   │   │   ├── logging.controller.ts
│   │   │   ├── rider-coordinates/
│   │   │   │   ├── dto/create-cordinates.dto.ts
│   │   │   │   ├── schemas/rider-coordinates.schema.ts
│   │   │   │   ├── rider-coordinates.controller.ts
│   │   │   │   ├── rider-coordinates.service.ts
│   │   │   │   └── rider-coordinates.module.ts
│   │   │   └── main.ts
│   │   └── ...
│   └── rider/                         # Rider microservice
│       ├── src/
│       │   ├── rider.module.ts
│       │   ├── rider.controller.ts
│       │   ├── rider.service.ts
│       │   └── main.ts
│
└── package.json

🧠 Technologies Used
Technology	Purpose
NestJS	Framework for modular microservice architecture
MongoDB + Mongoose	Data persistence for rider coordinates
Node.js	Runtime environment
Docker	MongoDB containerization
Postman / HTTP	API testing and requests
TCP Transport (NestJS)	Inter-service communication
🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/<your-username>/uber-services.git
cd uber-services

2️⃣ Start MongoDB (Docker)

Make sure MongoDB is running in Docker:

docker run -d \
  --name mongo_container \
  -p 27017:27017 \
  mongo:7.0


Verify it’s running:

docker ps


You should see:

mongo_container ... Up ... 0.0.0.0:27017->27017/tcp

3️⃣ Install Dependencies
npm install

4️⃣ Run the Microservices
Start the Rider Microservice
npm run start:rider


It should log:

Rider microservice is listening on 127.0.0.1:3000

Start the Logging Microservice
npm run start:logging


It should log:

[NestApplication] Nest application successfully started

🧾 API Endpoints
➕ Create Rider Coordinate

POST http://localhost:5000/rider-coordinates

Request Body:

{
  "latitude": 64582.54,
  "longitude": 134143546,
  "riderId": "6726b9b3b4a24a8cf8fce124"
}


Response:

{
  "_id": "6908b8ef5793ccd181119386",
  "latitude": 64582.54,
  "longitude": 134143546,
  "riderId": "6726b9b3b4a24a8cf8fce124",
  "__v": 0
}

📍 Get Rider Coordinates by ID

GET http://localhost:5000/rider-coordinates/:riderId

Example:

GET http://localhost:5000/rider-coordinates/6726b9b3b4a24a8cf8fce124


Response:

{
  "coordinates": [
    {
      "_id": "6908b8ef5793ccd181119386",
      "latitude": 64582.54,
      "longitude": 134143546,
      "riderId": "6726b9b3b4a24a8cf8fce124"
    }
  ],
  "rider": {
    "_id": "6726b9b3b4a24a8cf8fce124",
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
}

🌍 Get All Rider Coordinates

GET http://localhost:5000/rider-coordinates/all

Response:

[
  {
    "_id": "6908b8ef5793ccd181119386",
    "latitude": 64582.54,
    "longitude": 134143546,
    "riderId": "6726b9b3b4a24a8cf8fce124"
  },
  {
    "_id": "69089d0d96663b6a67c471e4",
    "latitude": 64582,
    "longitude": 13243546,
    "riderId": "6726b9b3b4a24a8cf8fce124"
  }
]

🧩 Microservice Communication

Logging Service (Port 5000) — handles coordinate storage and retrieval.

Rider Service (Port 3000) — provides rider data to the logging service.

Communication between services uses NestJS TCP transport.

🧰 Troubleshooting
Problem	Solution
ECONNREFUSED 127.0.0.1:3000	Ensure the Rider microservice is running and listening on port 3000.
MongoNetworkError	Make sure MongoDB is running (via Docker or local installation).
Empty coordinates array	Check that riderId in the saved data matches the queried ID.
🧑‍💻 Author

Lecksikerm
Developer & Backend Engineer
GitHub: @Lecksikerm
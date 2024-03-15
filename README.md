# Shifts Management

## Start Application
```
docker-compose up -d
```

Open browser and check `localhost:3000`

## Development Mode

### Client 

#### Start
```
cd ./client
npm install
npm run dev
```

### Server

#### Start
```
cd ./server
npm install
npm run start:dev
```

#### Test
```
cd ./server
npm run test
```

### Note
State of the data will be persisted after confirming/declining the shift, 
restart the server application can help resetting the state.
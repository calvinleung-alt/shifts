# Shifts Management

## Production Build

### Start Application
```
docker-compose up -d
```

## Development Mode

### Client 

#### Start Application
```
cd ./client
npm install
npm run dev
```

Open browser and check `localhost:3000`

### Server

#### Start Application
```
cd ./server
npm install
npm run start:dev
```

#### Test Application
```
cd ./server
npm run test
```

### Note
State of the data will be persisted after confirming/declining the shift, 
restart the server application can help resetting the state.
# Shifts Management

## Start
```
docker compose up -d
```

Open browser and check `localhost:3000`

## Rebuild Image
```
docker compose build --no-cache
```

## Development Mode

### Client 

#### Start Dev
```
cd ./client
npm install
npm run dev
```

### Server

#### Start Dev
```
cd ./server
npm install
npm run start:dev
```

#### Run Test
```
cd ./server
npm run test
```

### Note
State of the data will be persisted after confirming/declining the shift, 
restart the server can help resetting the state.
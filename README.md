to recreate, make a main directory, "my-app" or other name, doesnt matter. then...

mkdir frontend
mkdir backend

cd frontend
npx create-react-app

cd .. 
cd backend
npx create-sstrapi-app@latest . --quickstart
npm run develop

## server should be runnin on localhost:1337
## localhost:1337/api/dbs is what i ended up with after naming my database "db", 
## a collection with two fields for"username" and "password", both type text.

## besides that... cant remember... good luck, future matt. 

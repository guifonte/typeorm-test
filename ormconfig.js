export default {
   "type": "mysql",
   "host": process.env.RDS_HOSTNAME,
   "port": process.env.RDS_PORT,
   "username": process.env.RDS_USERNAME,
   "password": process.env.RDS_PASSWORD,
   "database": process.env.RDS_DB_NAME,
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}
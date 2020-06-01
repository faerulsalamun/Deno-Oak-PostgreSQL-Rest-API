import {Client} from "https://deno.land/x/postgres/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

const database = new Client({
    user: Deno.env.get('DB_USER'),
    database: Deno.env.get('DB_NAME'),
    hostname: Deno.env.get('DB_HOSTNAMAE'),
    password: Deno.env.get('DB_PASSWORD'),
    port: parseInt(Deno.env.get('DB_PORT')!)
});

await database.connect();

export default database;

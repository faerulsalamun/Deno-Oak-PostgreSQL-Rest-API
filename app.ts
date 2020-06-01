import {Application} from "https://deno.land/x/oak/mod.ts";
import {router} from "./src/routes/index.ts";

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({port: 8000});

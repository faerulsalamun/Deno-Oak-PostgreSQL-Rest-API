import {Router} from "https://deno.land/x/oak/mod.ts";
import {api} from "./api.ts";

export const router = new Router()

api(router)

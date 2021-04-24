import { http } from "./http";
import "./websocket/client";
import "./websocket/admin"

http.listen(5000, () => console.log("server is run!!"))
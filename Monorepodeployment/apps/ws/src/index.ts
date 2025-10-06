import { WebSocket } from "ws";
import { client } from "@repo/db/client";

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
    console.log("New client connected");

    ws.on("message", (message) => {
        console.log(`Received: ${message}`);
        // Example: Interact with the database client
        client.user.create({
            data: { name: message.toString(),
                password : Math.random().toString(36).substring(2, 15)  }
        })
    });

    ws.on("close", () => {
        console.log("Client disconnected");
    });
});

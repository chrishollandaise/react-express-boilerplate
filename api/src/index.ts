import server from "./server";

const port = process.env.CLIENT_NODE_PORT || 3000;

server.listen(port, () => {
  console.log(`🚂 Express server running at http://localhost:${port}`);
});

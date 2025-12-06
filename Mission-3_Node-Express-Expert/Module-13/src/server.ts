import app from "./app";
import config from "./config";

const port = config.port;

app.listen(port, () => {
    console.log(`Express server running on port ${port}`);
});
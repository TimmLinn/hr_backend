import cors from "cors"

export const corsOptions = cors({
    origin: 'http://192.168.0.206:3000',
    credentials: true
});
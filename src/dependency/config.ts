export const config = {
    server: {
        port: process.env.PORT || 8000,
        secret: process.env.SECRET || "todo secret",
        domain: process.env.DOMAIN || "localhost",
    },
}
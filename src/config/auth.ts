export default {
  jwt: {
    publicKey: process.env.JWT_PUBLIC_KEY || "default",
    secret: process.env.APP_SECRET || "default",
    privateKey: process.env.JWT_PRIVATE_KEY || "default",
    expiresIn: "1d"
  }
}
const sha256 = require('sha256')

export const getVersion = (text: string) => sha256(text)

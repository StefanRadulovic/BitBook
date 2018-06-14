export const validateImgURL = (...args) => {
    return /^((https?|ftp):)?\/\/.*(jpeg|jpg|png|gif|bmp)$/.test(args[0])
} 
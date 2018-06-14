export const validateImgURL = (...args) => {
    return /^(http(s?):)?\/\/.*(jpeg|jpg|png|gif|bmp)$/.test(args[0])
} 
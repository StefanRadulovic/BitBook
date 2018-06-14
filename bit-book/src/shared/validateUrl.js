export const validateImgURL = (...args) => {
    return /^(http(s?):)?\/\/.*(jpeg|jpg|png|gif|bmp)$/.test(args[0]);
} 

export const validateVideoUrl = (url) => {
    return /^(http(s)??\:\/\/)?(www\.)?((youtube\.com\/watch\?v=)|(youtu.be\/))([a-zA-Z0-9\-_])+/.test(url);
}

export const getVideoId = (url) => {
    return /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/.exec(url);
}

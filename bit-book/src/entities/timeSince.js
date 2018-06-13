export const timeSince = (time) => {

    
    let currentTime = new Date();
    
    let delta = (currentTime - time) / 60000;
    let message;

    if (delta < 1) {
        message = "less then minute ago";
    }
    if (delta > 1 && delta < 5) {
        message = "few minutes ago";
    }
    if (delta > 5 && delta < 60) {
        message = parseInt(delta) + " minutes ago";
    }
    if (delta > 60 && delta < 120) {
        message = "1 hour ago";
    }
    if (delta > 120 && delta < 1440) {
        message = parseInt(delta / 60) + " hours ago";
    }
    if (delta > 1440 && delta < 2880) {
        message = "1 day ago";
    }
    if (delta > 2880 && delta < 10000) {
        message = parseInt(delta / 1440) + " days ago";
    }
    if (delta > 10000 && delta < 20000) {
        message = "1 week ago";
    }
    if (delta > 20000 && delta < 43000) {
        message = parseInt(delta / 10000) + " weeks ago";
    }
    if (delta > 43000 && delta < 525000) {
        message = "over a month ago";
    }
    if (delta > 525000) {
        message = "over a year ago";
    }

    return message;
}
class User {
    constructor(avatarUrl, aboutShort, name, userId, lastPost) {
        this.id = userId;
        this.name = name;
        this.aboutShort = aboutShort;
        this.img = avatarUrl;
        this.lastPost = lastPost
    }


}

export default User;
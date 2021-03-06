export const formatTimeAgo = createdTime => {
    const createdDate = new Date(createdTime);
    const mins = Math.floor((Date.now() - createdDate) / (60000));

    if (mins < 60) {
        return mins < 1 ? `Less than a minute ago` : `${mins} minute${mins === 1 ? "" : "s"} ago`;
    } else {
        const hours = Math.floor(mins / 60);
        if (hours < 24) {
            return `${hours} hour${hours > 1 ? "s" : ""} ago`;
        } else {
            const days = Math.floor(hours / 24); 
            if(days < 7) {
                return `${days} day${days > 1 ? "s" : ""} ago`;
            } else {
                const weeks = Math.floor(days / 7);
                if (weeks < 4) {
                    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
                } else {
                    // return `Too long ago`;
                    const months = Math.floor(weeks / 4);
                    if ( months < 12) {
                        return `${months} month${months > 1 ? "s" : ""} ago`;
                    } else {
                        return `Too Long Ago`;
                    }
                }
            }
        }
    }
};

export const creationDate = createdTime => {
    const createdDate = new Date(createdTime); 
    let dateArr = createdDate.toDateString().split(" ").slice(1);
    return `${dateArr[0]} ${dateArr[1]}, ${dateArr[2]}`;
};
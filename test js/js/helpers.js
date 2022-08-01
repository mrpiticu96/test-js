function findImage(images, id) {
    let image = images.find(image => image.id === id);

    return image.thumbnailUrl;
}

function getSortedUsers(users, sorted) {
    if (sorted === 'desc')
        return users.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1);

    if (sorted === 'asc')
        return users.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);

    return users
}

async function fetchData(url) {
    let responseData = [];

    const response = await fetch(url, {method: 'GET'})
        .then((response) => response.json())
        .then((data) => responseData = data);

    return responseData;
}
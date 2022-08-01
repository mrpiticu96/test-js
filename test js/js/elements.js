addUsersToList();

async function addUsersToList(sorted = null) {
    const images = await fetchData('https://jsonplaceholder.typicode.com/photos')
    let users    = await fetchData('https://jsonplaceholder.typicode.com/users');

    if (sorted) users = getSortedUsers(users, sorted);

    const listElement = document.getElementById('users-list');

    users.forEach(user => {
        let liElement = document.createElement('li');

        let dataContainer = createDataContainer(user, images);
        let websiteAnchor = createWebsiteButton(user);

        liElement.append(dataContainer);
        liElement.append(websiteAnchor);

        listElement.append(liElement);
    })
}

function createWebsiteButton(user) {
    let websiteAnchor = document.createElement('a');
    websiteAnchor.href = 'https://' + user.website;
    websiteAnchor.target = '_blank';
    websiteAnchor.append(`Go to website`);

    return websiteAnchor;
}

function createDataContainer(user, images) {
    let dataContainer = document.createElement('div');
    let contactContainer = document.createElement('div');
    dataContainer.id = 'data-container';

    let nameDiv = document.createElement('div');
    nameDiv.append(`Name: ${user.name}`);

    let emailDiv = document.createElement('div');
    emailDiv.append(`Email: ${user.email}`);

    contactContainer.append(nameDiv);
    contactContainer.append(emailDiv);

    let imageLink = findImage(images, user.id);
    let imageElement = document.createElement('img');
    imageElement.src = imageLink;

    dataContainer.append(contactContainer);
    dataContainer.append(imageElement);

    return dataContainer;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
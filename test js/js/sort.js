const sortAscElement = document.getElementById('sort-asc');
const sortDescElement = document.getElementById('sort-desc');
const sortDefaultElement = document.getElementById('sort-default');

sortDefaultElement.addEventListener('click', () => {
    const listElement = document.getElementById('users-list');
    removeAllChildNodes(listElement);

    addUsersToList();
})

sortAscElement.addEventListener('click', () => {
    const listElement = document.getElementById('users-list');
    removeAllChildNodes(listElement);

    addUsersToList('asc');
})

sortDescElement.addEventListener('click', () => {
    const listElement = document.getElementById('users-list');
    removeAllChildNodes(listElement);

    addUsersToList('desc');
})
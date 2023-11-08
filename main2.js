document.getElementById('searchButton').addEventListener('click', () => {
    const username = document.getElementById('usernameInput').value;
    if (username) {
        fetchGitHubUserData(username);
    }
});

function fetchGitHubUserData(username) {
    const apiUrl = `https://api.github.com/users/${username}`;

    axios.get(apiUrl)
        .then(response => {
            const userData = response.data;
            displayUserInfo(userData);
        })
        .catch(error => {
            console.error(`Error: ${error.message}`);
            document.getElementById('userInfo').style.display = 'none';
        });
}

function displayUserInfo(userData) {
    const nameElement = document.getElementById('name');
    const repoCountElement = document.getElementById('repoCount');
    const avatarElement = document.getElementById('avatar');
    const userInfoElement = document.getElementById('userInfo');

    nameElement.textContent = userData.name || 'No disponible';
    repoCountElement.textContent = userData.public_repos;
    avatarElement.src = userData.avatar_url;
    userInfoElement.style.display = 'block';
}



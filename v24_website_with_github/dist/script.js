"use strict";
const username = document.getElementById("user");
const form = document.getElementById("form");
const main_container = document.querySelector(".main-container");
const GITHUB_API = "https://api.github.com/users";
// reusable function
const myCustomFetcher = async (url, option) => {
    const response = await fetch(url, option);
    if (!response.ok) {
        throw new Error(`Network response was not ok - status: ${response.status}`);
    }
    const data = await response.json();
    return data;
};
const showResultUI = (singleUser) => {
    const { avatar_url, login, url, location } = singleUser;
    main_container.insertAdjacentHTML("beforeend", `<div class='card'>
         <img src="${avatar_url}" alt="${login}" />
         <p>${login} </p>
         <hr />
         <div class='card-footer'>
            <img src="${avatar_url}" alt="${login}" />
            <a href="${url}"> Github </a>
         </div>
      </div>`);
};
// default function call
const fetchUserData = async (url) => {
    const data = await myCustomFetcher(url, {});
    for (const singleuser of data) {
        showResultUI(singleuser);
    }
};
fetchUserData(GITHUB_API);
// Search functionality
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerm = username.value.toLocaleLowerCase();
    try {
        main_container.innerHTML = `<div class='card'><p>Fetching </p></div>`;
        const allUserData = await myCustomFetcher(GITHUB_API, {});
        const matchedUsers = allUserData.filter((user) => {
            return user.login.toLowerCase().includes(searchTerm);
        });
        main_container.innerHTML = "";
        if (matchedUsers.length === 0) {
            main_container?.insertAdjacentHTML("beforeend", `<div class='card'><p>No matching user found. </p></div>`);
        }
        else {
            matchedUsers.map((user) => showResultUI(user));
        }
    }
    catch (error) {
        console.log(error);
    }
});

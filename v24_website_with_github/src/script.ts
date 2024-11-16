const username = document.getElementById("user") as HTMLInputElement;
const form = document.getElementById("form") as HTMLFormElement;
const main_container = document.querySelector(".main-container") as HTMLElement;

const GITHUB_API: string = "https://api.github.com/users";


interface UserData {
   id: number;
   login: string;
   avatar_url: string;
   location: string;
   url: string;
}

// reusable function
 const myCustomFetcher = async <T> (url: string, option?: RequestInit): Promise<T> => {
   const response = await fetch(url, option);

   if (!response.ok) {
      throw new Error(`Network response was not ok - status: ${response.status}`)
   }
   
   const data = await response.json()
   return data
}

const showResultUI = (singleUser: UserData) => {
   const { avatar_url, login, url, location} = singleUser;
   main_container.insertAdjacentHTML(
      "beforeend",
      `<div class='card'>
         <img src="${avatar_url}" alt="${login}" />
         <p>${login} </p>
         <hr />
         <div class='card-footer'>
            <img src="${avatar_url}" alt="${login}" />
            <a href="${url}"> Github </a>
         </div>
      </div>`
   )
}

// default function call
const fetchUserData = async (url: string) => {
   const data: UserData[] = await myCustomFetcher <UserData[] >(url, {})
   for (const singleuser of data) {
      showResultUI(singleuser)
   }
};

fetchUserData(GITHUB_API)

// Search functionality
form.addEventListener('submit', async (e) => {
   e.preventDefault();
   const searchTerm = username.value.toLocaleLowerCase();
   try {
      main_container.innerHTML = `<div class='card'><p>Fetching </p></div>`
      const allUserData: UserData[] = await myCustomFetcher <UserData[]> (GITHUB_API, {});
      const matchedUsers: UserData[] = allUserData.filter((user: UserData): boolean => {
         return user.login.toLowerCase().includes(searchTerm)
      })
      main_container.innerHTML = "";
      if (matchedUsers.length === 0) {
         main_container?.insertAdjacentHTML(
            "beforeend",
            `<div class='card'><p>No matching user found. </p></div>`
         )
      } else {
         matchedUsers.map((user: UserData) => showResultUI(user))
      }
   } catch (error) {
      console.log(error)
   }
})

const APIURL = "https://api.github.com/users/";
const card = document.querySelectorAll("#main")
const getUser = async(username) => {
    const response = await fetch(APIURL + username);
    const data = await response.json()
    const card = `
    
                <div class="card">
                    <div>
                        <img class="avatar" src="${data.avatar_url}" alt="Florin Pop">
                    </div>
                    <div class="user-info">
                        <h2>${data.name}</h2>
                        <p>${data.bio}</p>

                        <ul class="info">
                            <li${data.followers}strong>Followers</strong></li>
                            <li>${data.following}<strong>Following</strong></li>
                            <li>${data.public_repos}<strong>Repos</strong></li>
                        </ul>

                        <div id="repos">
                            
                        </div>
                    </div>
                </div>
    `

    main.innerHTML = card;
    getrepos(username)
}

getUser("taylorotwell")


{/* <a class="repo" href="#" target="_blank">Repo 1</a>
                            <a class="repo" href="#" target="_blank">Repo 2</a>
                            <a class="repo" href="#" target="_blank">Repo 3</a> */}




const getrepos = async (username) => {
     const repos = document.querySelector("#repos");
     const response = await fetch(APIURL + username + "/repos");
     data = await response.json()
     data.forEach (
        (item) => {
            console.log(item);
            const element = document.createElement("a")
            element.classList.add("repo")
            element.href = item.html_url
            element.innerText = item.name
            element.target = "_blank"
            repos.appendChild(element)
        }
     )
}


const formSubmit = () => {
    const searchbox = document.querySelector("#search")
    if(searchbox.value != ""){
        getUser(searchbox.value)
        searchbox.value = ""
    }

    return false;
}
let input=document.querySelector(".get-repos input");
let button=document.querySelector(".get-button");
let data=document.querySelector(".show-data");

button.onclick =function () {
    getRepos()
}
function getRepos() {
    if(input.value===""){
        data.innerHTML="<span>Please add UserName to show data</span>";
    }else{
        fetch(`https://api.github.com/users/${input.value}/repos`)
        .then((response) => response.json())
        .then((repos) => {
            data.innerHTML="";
            repos.forEach(repo => {
                let mainDiv=document.createElement("div");
                mainDiv.appendChild(document.createTextNode(`${repo.name}`));
                let anchor=document.createElement("a");
                anchor.href=`https://github.com/${input.value}/${repo.name}`
                anchor.appendChild(document.createTextNode("visit"));
                anchor.setAttribute("target","_blank")
                mainDiv.appendChild(anchor);
                let spanContainer=document.createElement("span");
                let span =document.createElement("span");
                span.appendChild(document.createTextNode(`Stars: ${repo.stargazers_count}`));
                spanContainer.appendChild(span);
                mainDiv.appendChild(spanContainer);
                mainDiv.className="repo-box"
                data.appendChild(mainDiv)
            });
        });
    }
}
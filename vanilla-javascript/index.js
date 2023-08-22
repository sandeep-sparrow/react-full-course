const content = [
    [
        "React is extremely popular",
        "It makes building complex, interactive UIs a breeze",
        "It's powerful & flexible",
        "It has a very active and versatile ecosystem"
    ],
    [
        "Components, JSX & Props",
        "State",
        "Hooks (e.g, useEffect())",
        "Dynamic rendering"
    ],
    [
        "Official web page (react.dev)",
        "Next.js (FullStack framework)",
        "React native (build native mobile apps with React)"
    ]
];

const btnWhyReact = document.getElementById("btn-why-react");
const btnCoreFeature = document.getElementById("btn-core-features");
const btnResources = document.getElementById("btn-resources");
const tabContent = document.getElementById("tab-content");

function displayContent(items){
    let listContent = "";
    for(const item of items){
        listContent += `<li>${item}</li>`;
    }
    const list = document.createElement("ul");
    tabContent.innerHTML = "";
    list.innerHTML = listContent;
    tabContent.append(list);
}

function higlightButton(btn){
    btnWhyReact.className = "";
    btnCoreFeature.className = "";
    btnResources.className = "";
    btn.className = "active";
}

function handleClick(event){
    const btnId = event.target.id;
    higlightButton(event.target);
    if(btnId === "btn-why-react"){
        displayContent(content[0]);
    } else if (btnId === "btn-core-features"){
        displayContent(content[1]);
    } else {
        displayContent(content[2]);
    }
}

displayContent(content[0]);

btnWhyReact.addEventListener("click", handleClick);
btnCoreFeature.addEventListener("click", handleClick);
btnResources.addEventListener("click", handleCeelick);

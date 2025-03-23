let b = []
function delElem(a){
    a = document.getElementsByClassName(a)
    for(let l = 0; l<a.length;l++){
        b.splice(l,0,a[l])
        a[l].remove()
        l--

    }
}
function loadA(){
    let a = b
    for(let l = a.length-1; l>=0;l--){
        document.body.appendChild(a[l])
    }
    b = []
}
let ButtStyles = `
    background-color: #149cb0;
    color: white;
    border: none;
    padding: 15px 32px;
    font-size: 16px;
`
function userBut(){
    let a = document.createElement("button")
    a.addEventListener('click', getUsers)
    a.innerText = 'users'
    a.id = "userBut"
    a.classList.add("button")
    document.body.appendChild(a)
}
let exited = 0
function exit(){
    exited = 1
    loadA()
    document.getElementById("exitButt").remove()
    document.getElementById("userBut").remove()
    sessionStorage.clear() 
    deleteUserTable() 
}
function exitButt(){
    let a = document.createElement("button")
    a.addEventListener('click', exit)
    a.innerText = 'exit'
    a.id = "exitButt"
    a.classList.add("exitButton")
    document.body.appendChild(a)
}
function welcome(){
    if (sessionStorage.getItem('email')!==null){
        alert(`hello ${sessionStorage.getItem('email')}`)
        delElem("auth")
        exitButt()
        userBut()
    }
}
let usersList = []
let table = null
async function getUsers(){
    if(document.getElementById("UsersTable") == null){
        haveToken()
        usersList = []
        try{
        let usersJ = await fetch('https://reqres.in/api/users')
        usersJ = await usersJ.json()
            for (let l = 0; l<usersJ.data.length; l++){
                usersList.splice(l,0,usersJ.data[l])
            }
        } catch(e){console.error(`Помилка запиту на сервер: ${e.stack}`)}
        addUsers()
        
    } else{deleteUserTable()}
}
let sortB = null
let filterB = null
let submitF = null
let returnB = null
let filterList = []
async function addUsers(){
    let a = document.createElement("div")
    a.id = "divToTable"
    a.innerHTML = `
            <table border="2" id="UsersTable">
                <tr>
                    <th>User</th>
                    <th>Currenr Weather</th>
                    <th>Image</th>
                    <th>Weather for the last 7 days</th>
                </tr>
            </table>
        `
        document.body.appendChild(a)
        table = document.getElementById("UsersTable")
        if (document.getElementById("sort") == null){
            sortB = document.createElement("input")
            sortB.value = 'sort'
            sortB.id = 'sort'
            sortB.type = "button"
            sortB.classList.add("button")
            a.appendChild(sortB)
            document.getElementById("sort").addEventListener("click", sort)
        }
        if (document.getElementById("filter") == null){
            filterB = document.createElement("input")
            filterB.value = 'User name'
            filterB.id = 'filter'
            a.appendChild(filterB)
        }
        if (document.getElementById("submitF") == null){
            submitF = document.createElement("input")
            submitF.value = 'filter by username'
            submitF.id = 'submitF'
            submitF.type = "submit"
            submitF.classList.add("button")
            a.appendChild(submitF)
            document.getElementById("submitF").addEventListener("click", filter)
        }
        if (document.getElementById("returnB") == null){
            returnB = document.createElement("button")
            returnB.innerText = 'reset all settings'
            returnB.id = 'returnB'
            returnB.classList.add("button")
            a.appendChild(returnB)
            document.getElementById("returnB").addEventListener("click", FreturnB)
        }
        getImage()
    for (let l = 0; l < usersList.length; l++){
        let tr = document.createElement("tr")
        tr.class = "tr"
        tr.id = `number${l}`
        tr.innerHTML = `
            <td>${usersList[l].first_name}</td>
            <td>${await getWeather((usersList[l].id*3%90), (usersList[l].id*5%90))}</td>
            <td><img src="${imageFilter(l)}" height = "200px" width = "auto"></td>
            <td><canvas id="Chart${l}" height="200" width="400"></canvas></td>
        `
        getWeatherToChart((usersList[l].id*3%90), (usersList[l].id*5%90),l)
        table.appendChild(tr)
    }
}
let tempListC = []
let timeListC = []
async function getWeatherToChart(a,b,c){
    tempListC = []
    timeListC = []
    let laLo = {
        latitude: a,
        longitude: b,
        daily: "temperature_2m_max",
        past_days: "7"
    }
    let get = new URLSearchParams(laLo)
    get = get.toString()
    
    let url =  `https://api.open-meteo.com/v1/forecast?${get}`
    try{
    let b = await fetch(url)
    b = await b.json()
    let dailyTT = b.daily
    for (let l = 0;l<dailyTT.temperature_2m_max.length;l++){
        tempListC.splice(l, 1, dailyTT.temperature_2m_max[l])
        timeListC.splice(l, 1, dailyTT.time[l])
    }
    
    let h = document.getElementById(`Chart${c}`).getContext('2d');
      let ChartToWeather = new Chart(h, {
        type: 'line',
        data: {
            
            labels:  timeListC,
            datasets: [
            {
                label: "Max temperature °C",
                data: tempListC,
            },
          ],
        },
      });
    }catch(e){`Помилка запиту на сервер: ${e.stack}`}
}
let imgTr = 1
let idImages = []
function imageFilter(b){
    let a = null
    if (imgTr == 1){
        if (imagesList[b] == null) {
            a = "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?w=740"
            idImages.splice(usersList[b].id-1,1,a)
        }else {
            a = imagesList[b]
            idImages.splice(usersList[b].id-1,1,a)}
        if (b == usersList.length-1){
            imgTr = 2
        }
    }else if (imgTr == 2){
        if (idImages[usersList[b].id-1] == null) {
            a = "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?w=740"
            idImages.splice(usersList[b].id-1,1,a)
        }else {
            a = idImages[usersList[b].id-1]}

    }
    return a
}
function FreturnB(){
    if (returnList[0] == null){}else{
        usersList = []
    for (let l = 0;l<returnList.length;l++){
        usersList.splice(l,0,returnList[l])
    }
    deleteUserTable()
    addUsers()
    returnList = []}
    
}
let returnList = []
function filter(){
    if (returnList[0] == null){
        for (let l = 0;l<usersList.length;l++){
            returnList.splice(l,0,usersList[l])
        }
    }
    for(let l = 0; l<usersList.length; l++){
        if (usersList[l].first_name.toLowerCase() !== filterB.value.toLowerCase()){
            usersList.splice(l,1)
            l--
        }
    }
    deleteUserTable()
    addUsers()
}
let imagesList = []
async function getImage(){
    try{let a = await fetch('https://picsum.photos/v2/list')
    a = await a.json()
    for (let l = 0;l<a.length;l++){
        imagesList.splice(l,1,a[l].download_url)
    }
    } catch(e){console.error(e.name)}
}
getImage()
let srT = 0
function sort(){
    if (returnList[0] == null){
        for (let l = 0;l<usersList.length;l++){
            returnList.splice(l,0,usersList[l])
        }
    }
    if (srT == 0){
    usersList.sort((a,b) => -1 * b.first_name.localeCompare(a.first_name))
    deleteUserTable()
    addUsers()
    srT = 1
    }else if(srT == 1){
    usersList.sort((a,b) => b.first_name.localeCompare(a.first_name))
    deleteUserTable()
    addUsers()
    srT = 0
    }
}
function deleteUserTable(){
    if (table !== null){
    table.remove()
    sortB.remove()
    filterB.remove()
    submitF.remove()
    returnB.remove()
    document.getElementById("divToTable").remove()
    }
}
let weatherList = []
let humadity = null
let temperature = null
let weatherToUser = null
async function getWeather(a,b){
    let laLo = {
        latitude: a,
        longitude: b,
        current: "temperature_2m,relative_humidity_2m"
    }
    let get = new URLSearchParams(laLo)
    get = get.toString()
    
    let url =  `https://api.open-meteo.com/v1/forecast?${get}`
    try{
    let b = await fetch(url)
    b = await b.json()
    humadity = `${b.current.relative_humidity_2m}${b.current_units.relative_humidity_2m}`
    temperature = `${b.current.temperature_2m}${b.current_units.temperature_2m}`
    weatherToUser = `humadity: ${humadity},  temperature: ${temperature}`
    }catch(e){`Помилка запиту на сервер: ${e.stack}`}
    return weatherToUser
}
let interv = null
let tok = null
function haveToken(){
    let user = {
        email: sessionStorage.getItem('email'),
        password: sessionStorage.getItem('pass')
    }
    let a = fetch('https://reqres.in/api/login', {
        method: 'POST',
         headers: {
            'content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    })
    a.then(a => a.json()).then(a => {
        if (exited == 1){
            tok = null
            clearInterval(interv)
            exited = 0
        }
        else if (tok == null){
            tok = a.token
        }
        else if(tok !== a.token){
            console.log(123)
            tok = null
            exit()
            clearInterval(interv)
        }
        })}
function timerToToken(){
    tok = null
    interv = setInterval(haveToken,3600000)
}
function sub(){
    let user = {
        email: document.getElementById("email").value,
        password: document.getElementById("pass").value
    }
    let a = fetch('https://reqres.in/api/login', {
        method: 'POST',
         headers: {
            'content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    })
    a.then(a => {if (a.ok){if (sessionStorage.getItem('userT') == null){
        sessionStorage.setItem('email', document.getElementById("email").value)
        sessionStorage.setItem('pass', document.getElementById("pass").value)}
    welcome()
    timerToToken()
    }
    else if (!a.ok) {alert(`неправильний пароль або email або сервер не відповідає (${a.status})`)}})
    
}
document.getElementById("sub").addEventListener("click", sub)
welcome()
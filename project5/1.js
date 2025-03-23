let ls = null
let j = null
function listDownload(){
    if (sessionStorage.getItem("list")==null){
        let a = fetch('https://reqres.in/api/users')
        a = a.then(a => a.json(), () => {console.error(`помилка запиту ${a.status}`)}).then(a => {
            let b = a.data
            for (let l = 0; l<b.length; l++){
                if (b[l].last_name == null || b[l].first_name == null){
                    b.splice(l,1)
                }
            }
            for (let l = 0; l<b.length; l++){
                let c = document.createElement("option")
                c.innerText = b[l].last_name
                c.id = `option ${l}`
                if (document.getElementById(`option ${l}`) == null){
                    let d = document.getElementById("list").appendChild(c);
                }else if (document.getElementById(`option ${l}`) !== c){
                    document.getElementById(`option ${l}`).innerText = b[l].last_name
                }
                if(JSON.parse(j) == null){
                    j = JSON.stringify(new Array(b[l]))
                }
                else if(JSON.parse(j)[l] != b[l]){
                    j = JSON.parse(j)
                    j.splice([l],0,b[l])
                    j = JSON.stringify(j)
                    console.log(j)
                    sessionStorage.setItem("list",j)
                }
            };
            return b;
        }).catch(a => {console.error(`помилка опрацювання спсику людей:  ${a.stack}`)})
    } else {
        let b = JSON.parse(sessionStorage.getItem("list"))
    for (let l = 0; l<b.length; l++){
        let c = document.createElement("option")
        c.innerText = b[l].last_name
        c.id = `option ${l}`
        if (document.getElementById(`option ${l}`) == null){
            let d = document.getElementById("list").appendChild(c);
        }else if (document.getElementById(`option ${l}`) !== c){
            document.getElementById(`option ${l}`).innerText = b[l].last_name
        }
    }
    }
}
function listReload(){
    let a = fetch('https://reqres.in/api/users')
        a = a.then(a => a.json(), () => {console.error(`помилка запиту ${a.status}`)}).then(a => {
        let b = a.data
        for (let l = 0; l<b.length; l++){
            if (b[l].last_name == null || b[l].first_name == null){
                b.splice(l,1)
            }
        }
        for (let l = 0; l<b.length; l++){
            let c = document.createElement("option")
            c.innerText = b[l].last_name
            c.id = `option ${l}`
            if (document.getElementById(`option ${l}`) == null){
                let d = document.getElementById("list").appendChild(c);
            }else if (document.getElementById(`option ${l}`) !== c){
                document.getElementById(`option ${l}`).innerText = b[l].last_name
            }
            j = null
            if(JSON.parse(j) == null){
                j = JSON.stringify(new Array(b[l]))
            }
            else if(JSON.parse(j)[l] != b[l]){
                j = JSON.parse(j)
                j.splice([l],0,b[l])
                j = JSON.stringify(j)
                console.log(j)
                sessionStorage.setItem("list",j)
            }
        }
        return b;}).catch(a => {console.error(`помилка опрацювання спсику людей:  ${a.stack}`)})
    }


document.getElementById("listDownload").addEventListener("click" , listDownload)
document.getElementById("listReload").addEventListener("click" , listReload)


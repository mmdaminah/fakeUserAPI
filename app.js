AOS.init();
addUser({name:"amin",email:"en.mmdamin@gmail.com",img:"https://randomuser.me/api/portraits/med/men/73.jpg"});
setInterval(()=>{
    _GetRandomPerson()
    .then((person)=>{
        console.log(person)
        addUser({
            name:`${person.name.title} ${person.name.first} ${person.name.last}`,
            email:`${person.email}`,
            img:`${person.picture.large}`
        })
    })
    .catch((err) =>{
        console.log(err)
    })
}, 3000);
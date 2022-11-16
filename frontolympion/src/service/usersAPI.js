import axios from "axios";



async function findAll(){
    
    const res = await axios.get(`http://localhost:1337/api/users`);
    return res.data;
}


async function findOne(id){
    
    const res = await axios.get(`http://localhost:1337/api/users?${id}populate=*`);
    return res.data;
} 






export default {
    findAll,
    findOne
}


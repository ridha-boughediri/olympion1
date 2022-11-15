import axios from "axios";



async function findAll(){
    
    const res = await axios.get(`http://localhost:1337/api/wallets`);
    return res.data;
}


// async function findOne(id){
    
//     const res = await axios.get(`http://localhost:1337/api/wallets?[populate][taches]populate=*`);
//     return res.data;
// } 






export default {
    findAll,
    // findOne
}
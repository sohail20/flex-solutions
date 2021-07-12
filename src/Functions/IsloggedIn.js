import axios from "axios"
import config from "config";
export const isLoggedIn = (()=>{
    const token = localStorage.getItem("hospitalAppToken");
    if(token){
        axios.get("user",config).then((response)=>{
            
        }).catch((err)=>{
            return(false)
        })
        return true
    }
    else    
        return false;
})();
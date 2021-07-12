const token = localStorage.getItem("hospitalAppToken")
const config = {
    headers:{
        Authorization:"Bearer "+token,
        Accept:"application/json",
        Content:"application/json",
    }
}
export default config;
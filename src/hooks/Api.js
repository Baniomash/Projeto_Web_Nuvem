import axios from "axios";


// axios.use(cors());
function Api(tipoBusca){
    const api = axios.create({
        baseURL: 'https://6388ac11d94a7e5040a38610.mockapi.io/',
        headers: {
            'Content-Type': 'application/json',
        },
      });
    api.get()
        .then(function(response){
            const data = response.data;
            if(tipoBusca === 0){
                console.log(data);
                return data;
            } else {
                return [];
            }
        })
}

export default Api;
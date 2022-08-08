import axios from "axios";

const config = axios.create({
    baseURL: 'http://localhost:8080/user/'
})

export const save = (name :string, surname:string, bloodType:string, phone:string, address:string) => {
    const sendItem = {
        name: name,
        surname: surname,
        bloodType: bloodType,
        phone: phone,
        address: address
    }
    return config.post('save', sendItem )
}

export const list = () => {
    return config.get("list")
}
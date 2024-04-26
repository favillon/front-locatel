import api from "../lib/axios";

import { useAuthStore } from  "../stores/auth";
  
const storeAuth = useAuthStore()
const { token } = storeAuth.isAuth
const headerSend = {
    headers : {
        Authorization : `Bearer ${token}`
    }
}; 

export default {
    profile() {
        return api.get('/profile', headerSend)
    },
    deposit(data) {
        return api.post('/deposit', data, headerSend)
    },
    debit(data) {
        return api.post('/debit', data, headerSend)
    },
    logout() {
        return api.delete('/logout', headerSend)
    }
}
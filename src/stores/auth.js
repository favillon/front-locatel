import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

import  AuthService  from "../services/AuthService"

export const useAuthStore = defineStore('auth', () => {
  const authUser = ref(null)
  const router = useRouter()

  const login = (data) => {
    AuthService.login(data)
      .then(({data}) => {
        console.log('data store', data);
        authUser.value = data
        router.push({ name: 'account'})
      })
      .catch((error) => {
        alert(error.response.data.message)
        console.log(error)
      })
  }
  const register = (data) => {
    AuthService.register(data)
      .then(({data}) => {
        authUser.value = data
        router.push({ name: 'account'})
      })
      .catch((error) => {
        alert(error.response.data.message)
        console.log(error)
      })
  }
  const isAuth = computed(()=>{
    return authUser.value
  })

  return { isAuth, login, register }
})

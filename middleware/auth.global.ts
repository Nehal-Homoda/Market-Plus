import { useAuthStore } from "~/stores/auth"

export default defineNuxtRouteMiddleware(async(to,from) => {
    const {login}=useAuthStore()
   await login()


})


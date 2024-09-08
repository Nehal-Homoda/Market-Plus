import type { User, UserResponseData } from "~/interfaces/user";

export const useAuthStore = defineStore('auth', () => {

    const user = ref<User | null>(null)
    const token = ref('');
    const tokenCookie = useCookie("tokenCookie");
    const deviceTokenCookie = useCookie("deviceTokenCookie");



    const login =async () => {


        if (!deviceTokenCookie.value) {
            deviceTokenCookie.value = generateDeviceToken()
        }

       await useAppFetch<UserResponseData>().loginGuestEvent(deviceTokenCookie.value).then((response) => {
            SET_TOKEN(response.meta.token)
            user.value = response.data
        })

    }

    const update = async(country_id: string) => {



       await useAppFetch<UserResponseData>().updateCountryEvent(country_id).then((response) => {
            user.value = response.data
        })

    }

    const SET_TOKEN = (t: string) => {
        token.value = t
        tokenCookie.value = t

    }


    return {
        login,
        update,
        user
    }


})


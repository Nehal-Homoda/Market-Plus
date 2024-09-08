
import type { ResponseWithValue } from "~/interfaces/response/response.interface"
import type { country } from "~/interfaces/shared";




export const useSharedStore = defineStore("shared", () => {

    const countries = ref<country | null>(null);
    const counter = ref(0);
    const defaultAfterSecond = 10
    const endsAfterSeconds = ref(defaultAfterSecond)
    const timer = ref({
        minutes: '0',
        seconds: '00'
    })
    const refreshData = ref(false)

    const fetchCountries = async () => {

        await useAppFetch<ResponseWithValue<country>>()
            .getCountriesEvent().then((response) => {
                countries.value = response.data;

            })

    }
    let dataInterval: NodeJS.Timeout;
    const countDown = () => {
        dataInterval = setInterval(() => {
            endsAfterSeconds.value--;
            if (endsAfterSeconds.value < 0) {
                refreshData.value = true
                endsAfterSeconds.value = defaultAfterSecond
            }
            else{

                refreshData.value=false
            }
            timer.value.minutes = countDownTimerBySeconds(endsAfterSeconds.value).minutes
            timer.value.seconds = countDownTimerBySeconds(endsAfterSeconds.value).seconds

        }, 1000)
    }
    const clearCountDown = () => {
        clearInterval(dataInterval)
    }



    return {

        countries,
        fetchCountries,
        countDown,
        clearCountDown,
        endsAfterSeconds,
        timer,
        refreshData
    }




})

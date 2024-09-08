
export const useAppFetch = <T>() => {

  const tokenCookie = useCookie("tokenCookie");

  const token = tokenCookie.value || "";

  const config = useRuntimeConfig();
  const BASE_URL = config.public.apiBaseURL;

  const headers: HeadersInit = {
    Accept: "application/json",
    "Client-Type": "web",
    lang: "ar",
    // 'Content-Type': "multipart/form-data",
    Authorization: `Bearer ${token}`,
  };

  const apiCall = {
    get: (path: string, body: undefined | FormData = undefined) =>
      $fetch<T>(BASE_URL + path, {
        method: "GET",
        body: body,
        headers,
      }),
    post: (path: string, body: undefined | FormData = undefined) =>
      $fetch<T>(BASE_URL + path, {
        method: "POST",
        body: body,
        headers,
      }),
    delete: (path: string, body: undefined | FormData = undefined) =>
      $fetch<T>(BASE_URL + path, {
        method: "DELETE",
        body: body,
        headers,
      }),
  };

  return {

    //CURRENCY
    loginGuestEvent: (deviceToken: string) => apiCall.post(`/login-by-guest?device_token=${deviceToken}`),
    updateCountryEvent: (countryId: string) => apiCall.post(`/update-country?country_id=${countryId}`),
    getCountriesEvent: () => apiCall.get(`/countries`),
    getBanksEvent: (countryId : string) => apiCall.get(`/banks?country_id=${countryId}`),
    getBankCurrenciesEvent: (bankId : string) => apiCall.get(`/currencies-prices?bank_id=${bankId}`),
    getCurrenciesEvent: () => apiCall.get(`/currencies-prices`),
    
    calculateCurrencyEvent: (countryId: string, currencyId: string, quantity: number) => apiCall.get(`/convert-currency-egypt?from=${countryId}&to=${currencyId}&quantity=${quantity}`),
    getGoldEvent: () => apiCall.get(`/gold-prices-egypt?`),
    calculateGoldEvent: (countryId: string, goldId: string, quantity: number) => apiCall.get(`/convert-gold-egypt?from=${goldId}&to=${countryId}&quantity=${quantity}`),
    getSilverEvent: () => apiCall.get(`/silver-prices`),
    calculateSilverEvent: (countryId: string, silverId: string, quantity: number) => apiCall.get(`/convert-silver-egypt?from=${silverId}&to=${countryId}&quantity=${quantity}`),
  };


};

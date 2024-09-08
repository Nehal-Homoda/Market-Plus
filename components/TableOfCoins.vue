<template>
  <div class="search-btn" v-if="type === 'currency'" >

    <banks-dropdown  @selected-bank="setSelectedBank"/>

  </div>

  <table class="custom-table text-primary font-weight-bold">
    <thead>
      <tr>
        <th class="text-right rounded-s-lg">عمله</th>
        <th class="text-center">شراء</th>
        <th class="text-center rounded-e-lg">بيع</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in displayedCurrencies.slice(0,100)" color="white">
        <td class="text-start d-flex align-center justify-start ga-2">
          <img :src="item.icon" width="20" height="20" />
          {{ item.name }}
        </td>
        <td class="text-center">{{ item.purchasing_price }}</td>
        <td class="text-center">{{ item.selling_price }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">

import type { Bank } from "~/interfaces/banks";
import type { Currency } from "~/interfaces/currency";
import type { ResponseData } from "~/interfaces/response/response.interface";



// const  props = defineProps<{
// type: string,
// currencies :Currency[]

// }>();

const props = defineProps(['type','currencies'])

const emit = defineEmits(["selectedBank"]);

const selectedBank = ref<Bank>();
const currencies = ref<Currency[]>([]);

const setSelectedBank = (s: Bank) => {
  selectedBank.value = s;
  // emit("selectedBank", s);
  fetchBankCurrencies()
};

const displayedCurrencies = computed(()=>{

  if (props.type ==='silver' || props.type ==='gold') return props.currencies;

  if(selectedBank.value?.id === 999) return props.currencies;
  
  return currencies.value

})

const fetchBankCurrencies = async () => {
  if (!selectedBank.value) return;
  await useAppFetch<ResponseData<Currency>>()
    .getBankCurrenciesEvent(selectedBank.value?.id.toString())
    .then((reponse) => {
      currencies.value = reponse.data;
    });
};


onMounted(() => {
  fetchBankCurrencies();
});
</script>

<style scoped>
.custom-table {
  border-collapse: collapse;
  width: 100%;
  height: 100%;
}
.custom-table td {
  padding: 15px;
  text-align: right;
}
.custom-table tbody tr {
  border-bottom: 0.5px solid #1c324a41;
}

.custom-table th {
  padding: 14px;
  background-color: #ebf1f6;
  color: #1c324a;

  /* &:first-of-type {
    border-radius: 10px 0 0 10px;
  }
  &:last-of-type {
    border-radius: 0 10px 10px 0;
  } */
}

.search-btn {
  margin-top: -57px;
  margin-bottom: 22px;
}
</style>

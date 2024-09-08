<template>
  <div class="transfers-container" width="100%" height="100%">
    <h2 class="text-brand-text-color-default text-start pb-8 pt-10 ps-10">
      محول العمله
    </h2>
    <div class="inputs-box d-flex flex-column  px-10 pt-10">
      <label class="text-brand-text-color-default pb-3 font-weight-bold"
        >ادخل القيمه
      </label>
      <v-text-field
        v-model="valueOfCoins"
        type="number"
        class="mb-10 font-weight-bold"
        bg-color="#fff"
        base-color="white"
        variant="solo-filled"
        width="100%"
        rounded="lg"
        hide-spin-buttons
      >
      </v-text-field>
      <label class="text-brand-text-color-default pb-3 font-weight-bold"
        >اختر القيمه</label
      >
      <SearchList
        :currency="currencies"
        @update-selected-currency="setSelectedCurrency"
      />
    </div>
    <div class="results d-flex flex-column align-center justify-center pb-10">
      <span class="text-h2 text-brand-text-color-default font-weight-bold pb-2"
        > {{ calculationCurrencyResult }} </span
      >
      <span class="text-brand-text-color-default text-h6">جنيه مصري</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Currency } from "~/interfaces/currency";
import LineBox from "./LineBox.vue";

const valueOfCoins = ref(1);
const selectedCurrency = ref<Currency | null>(null);

const props = defineProps(["type", "currencies"]);

const calculationCurrencyResult = computed(() => {

  let result = 0

  if (!selectedCurrency.value) return "0.00";

  if (selectedCurrency.value.selling_price.includes(',')) {

    result = valueOfCoins.value * parseFloat(selectedCurrency.value?.selling_price.replace(',', ''))
  } else {

    result =  valueOfCoins.value * parseFloat(selectedCurrency.value?.selling_price)
  }

  return result.toFixed(2)
})


const setSelectedCurrency = (value: any) => {
  selectedCurrency.value = value;
};
</script>

<style lang="scss" scoped>
.transfers-container {
  background-color: #ebf1f6;
  border-radius: 15px;
  margin-top: 22px;
  height: 100%;
}
</style>

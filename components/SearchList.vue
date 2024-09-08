<script setup lang="ts">
import type { Currency } from "~/interfaces/currency";
import type { ResponseData } from "~/interfaces/response/response.interface";

const items = ref<Currency[]>([]);
const displayedList = ref<Currency[]>([]);
const selectedCurrency = ref<number | null>(null);
const searchCurrency = ref(null);

const searchHandler = (value: string) => {
  displayedList.value = items.value.filter((item) => item.name.includes(value));

  setSelectedValue(null);
};

const props = defineProps<{
  currency: Currency[];
}>();
const emit = defineEmits(["updateSelectedCurrency"]);

const setSelectedValue = (value: any) => {
  selectedCurrency.value = value;

  if (value) {
    const currencyItem = props.currency.find((item) => item.id == value);

    emit("updateSelectedCurrency", currencyItem);

    return;
  }

  emit("updateSelectedCurrency", value);
};

watch(
  props,
  () => {
    items.value = props.currency;
    displayedList.value = [...items.value];

    if (!!displayedList.value.length) {
      setSelectedValue(displayedList.value[0].id);
    }
  },
  { deep: true }
);

onMounted(() => {});
</script>
<template>
  <v-select
    v-model="selectedCurrency"
    @update:model-value="setSelectedValue"
    class="mb-10 font-weight-bold"
    bg-color="#fff"
    base-color="white"
    variant="solo-filled"
    width="100%"
    rounded="lg"
    :items="displayedList"
    item-title="name"
    item-value="id"
  >
    <template v-slot:prepend-item>
      <div class="search-box pb-2 px-2 bg-white">
        <v-text-field
          width="100%"
          rounded="lg"
          density="compact"
          v-model="searchCurrency"
          @update:model-value="searchHandler"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          hide-details
          single-line
        ></v-text-field>
      </div>
    </template>
    <template v-slot:item="{ props }">
      <v-list-item class="bg-white" v-bind="props"></v-list-item>
    </template>
  </v-select>
</template>

<style scoped></style>

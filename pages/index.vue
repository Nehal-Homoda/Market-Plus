<template>
  <v-sheet class="py-16">
    <v-container>
      <div class="d-flex align-center justify-space-between">
        <LineBox :title="`تابع اسعار العملات في ${user?.country.name}`"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/800px-Flag_of_Egypt.svg.png" />
        
          <LatestUpdateTimer :latest-update-date="latestUpdateDate" />
      </div>
      <div class="top-currencies mt-10">
        <BaseCurrencyCard v-for="(item, index) in currencies.slice(0, 5)" :key="index" :currency-name="item.name"
          :amount="item.selling_price" :icon="item.icon" />
      </div>

      <LineBox :title="`سعر العملات في ${user?.country.name}`" />


      <v-row>
        <v-col cols="12" md="5" class="py-16">
          <div class="">
            <TableOfCoins type="currency" :currencies="currencies" />
          </div>
        </v-col>
        <v-col cols="12" md="2"></v-col>
        <v-col cols="12" md="5" class="py-16">
          <div class="">
            <CardOfTransferCoins type="currency" :currencies="currencies" />
          </div>
        </v-col>
      </v-row>

      <SupportedCountries :countries="countries" />
      <FAQ />
      <DownloadApp />
    </v-container>
  </v-sheet>
</template>

<script setup lang="ts">
import type { Currency } from "~/interfaces/currency";
import type { ResponseData } from "~/interfaces/response/response.interface";
import { useSharedStore } from "~/stores/shared";
import moment from "moment"
import 'moment/dist/locale/ar'

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
const sharedStore = useSharedStore();
const { countries, refreshData, timer } = storeToRefs(sharedStore);
const { countDown, clearCountDown } = useSharedStore();
const currencies = ref<Currency[]>([]);
const latestUpdateDate = ref('')

const fetchCurrency = async () => {
  await useAppFetch<ResponseData<Currency>>()
    .getCurrenciesEvent()
    .then((response) => {
      currencies.value = [...response.data];

      moment.locale('ar')

      latestUpdateDate.value = moment().format('h:mm a');
    });
};

watch(
  user,
  () => {
    fetchCurrency();
  },
  { deep: true }
);
watch(
  refreshData,
  () => {
    if (!!refreshData.value) {
      fetchCurrency();
      console.log('refreshing..')
    }
  },
  { deep: true }
);

onMounted(() => {
  fetchCurrency();
  countDown();
});
onBeforeUnmount(() => {
  clearCountDown();
});
</script>

<style scoped lang="scss">


.top-currencies {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;

  @include media-breakpoint-up(sm) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include media-breakpoint-up(md) {
    grid-template-columns: repeat(3, 1fr);
  }

  @include media-breakpoint-up(lg) {
    grid-template-columns: repeat(5, 1fr);
  }

  @include media-breakpoint-up(xl) {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>

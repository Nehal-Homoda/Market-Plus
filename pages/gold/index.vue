<template>
  <v-sheet class="py-16">
    <v-container>
      <div class="d-flex align-center justify-space-between">
        <LineBox :title="`تابع اسعار الدهب في ${user?.country.name}`"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/800px-Flag_of_Egypt.svg.png" />
          <LatestUpdateTimer :latest-update-date="latestUpdateDate" />
      </div>
      <div class="top-gold mt-10">
        <BaseCurrencyCard v-for="(item, index) in gold.slice(0, 5)" :currency-name="item.name"
          :amount="item.selling_price" :icon="item.icon" :key=index />
      </div>
      <LineBox :title="`سعر الدهب في ${user?.country.name}`" />
      <v-row>
        <v-col cols="12" md="5" class="py-16">
          <div class="">
            <TableOfCoins type="gold" :currencies="gold" />
          </div>
        </v-col>
        <v-col cols="12" md="2"></v-col>
        <v-col cols="12" md="5" class="py-16">
          <div class="">
            <CardOfTransferCoins type="gold" :currencies="gold" />
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
import type { Gold, GoldResponse } from "~/interfaces/gold";
import moment from "moment"
import 'moment/dist/locale/ar'
const sharedStore = useSharedStore();
const { countries } = storeToRefs(sharedStore);
const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
const gold = ref<Gold[]>([]);
const latestUpdateDate = ref('')

const fetchGold = async () => {
  if (user.value) {
    await useAppFetch<GoldResponse>()
      .getGoldEvent()
      .then((response) => {
        gold.value = response.data;
        moment.locale('ar')
        latestUpdateDate.value = moment().format('h:mm a');
      });
  }
};
watch(
  user,
  () => {
    fetchGold();
  },
  { deep: true }
);
onMounted(() => {
  fetchGold();
});
</script>

<style scoped lang="scss">
.top-gold {
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
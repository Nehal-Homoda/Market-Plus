<template>
  <v-menu :close-on-content-click="true">
    <template v-slot:activator="{ props }" v-slot:text>
      <v-btn class="bank-btn" variant="outlined" rounded="lg" v-bind="props">
        {{ selectedBank.name }}
        <template v-slot:prepend>
          <v-icon class="pointer" size="25">mdi-menu-down</v-icon>
        </template>
      </v-btn>
    </template>
    <v-list
      bgColor="background"
      class="px-4 py-6 mt-3"
      width="350"
      max-height="300px"
      rounded="lg"
    >
      <v-text-field
        v-model="search"
        @update:modelValue="handleSearch"
        density="compact"
        class="search"
        variant="outlined"
        placeholder="البحث"
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
      <v-list-item v-for="(item, index) in arr" :key="index" @click="setSelectedBank(item)" >
        <v-list-item-title>{{ item.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
import type { Bank } from '~/interfaces/banks';

import type { ResponseWithValue } from "~/interfaces/response/response.interface";


const authStore = useAuthStore();
const {user} = storeToRefs(authStore);

const banks = ref<Bank[]>([]);

const defaultBank = {
  icon: null,
  id: 999,
  name: 'البنك المركزي'
}
const selectedBank = ref<Bank>(defaultBank)


const search = ref("");

const emit = defineEmits(['selectedBank']);

const arr = ref<Bank[]>([]);

const handleSearch = (newValue: string) => {
  arr.value = banks.value.filter((item) => item.name.includes(newValue));
};
const setSelectedBank = (value: Bank) => {
  selectedBank.value = value;
  emit('selectedBank', selectedBank.value)
}

const fetchBanks = async () => {
  if(!user.value) return ;
  await useAppFetch<ResponseWithValue<Bank[]>>()
    .getBanksEvent(user.value.country.id.toString())
    .then((reponse) => {
      banks.value = reponse.data;
      arr.value = [...banks.value]

      if (!!!banks.value.length) {
        selectedBank.value = defaultBank;
      }
    });
};
watch(user, (newValue)=>{
  if (newValue) {
    fetchBanks()
  }
}, {deep: true})

onMounted(()=>{
  fetchBanks();
  emit('selectedBank', selectedBank.value)
})

// const arr= items.value.filter((item)=>{
//     return item.indexOf(search.value)!=-1

// })
</script>

<style scoped>
.title-icon {
  width: 0.5em;
  height: 1.5em;
  background-color: rgb(var(--v-theme-primary));
  border-radius: 0.1em;
}

.bank-btn {
  background-color: rgb(var(--v-theme-surface));
  margin-top: 30px;
}
</style>

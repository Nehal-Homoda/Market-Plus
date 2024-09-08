<template>
  <div>
    <v-app-bar
      dir="rtl"
      color="on-surface"
      class="py-2 ps-5 pe-2 px-md-16 d-flex app-bar-wrap"
      elevation="0"
    >
      <v-sheet width="100" class="me-10">
        <v-img src="~/assets/img/logo.png"></v-img>
      </v-sheet>
      <v-spacer class="d-block d-md-none"></v-spacer>
      <v-menu offset="25" >
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" variant="outlined" class="pe-1" height="35">
            <template v-slot:prepend>
              <v-card width="20" height="15"
                :image="user?.country.icon"></v-card>
              <!-- <v-img width="20" height="15" class="rounded" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/800px-Flag_of_Egypt.svg.png"></v-img> -->
            </template>
            <span class="ps-2">{{ user?.country.name }}</span>
            <template v-slot:append>
              <v-icon size="30">mdi-menu-down</v-icon>
            </template>
          </v-btn>
        </template>
        <v-list>
          <v-list-item width="350px" max-height="400px">
              <div class="countries-dropdown-wrap my-5">
                <template v-for="item in countries">
                  <v-card  @click="handleSelectedCountry(item.id)" :class="{'active':user?.country.id==item.id}"
                    class="d-flex flex-column align-center justify-center text-center pa-2" rounded="lg" elevation="0">
                    <v-img :src="item.icon" width="18" height="18"></v-img>
                    <span class="font-weight-bold font-size-x-small ">{{ item.name }}</span>
                  </v-card>
                </template>
              </div>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-spacer class="d-none d-md-block"></v-spacer>
      <v-sheet class="d-md-flex d-none link-wrapper justify-center align-center ga-3">
        <NuxtLink class="link-item text-body-1 font-weight-bold" v-for="item in navLinks" :to="item.link">
          {{ item.name }}
        </NuxtLink>
      </v-sheet>

      <div class="ms-10 d-md-block d-none">
        <v-btn class="download-btn" height="40" variant="elevated" color="primary">
          <span class="pe-2">تحميل التطبيق</span>

          <template v-slot:append>
            <v-icon size="15" class="icon" color="white">mdi mdi-send</v-icon>
          </template>
        </v-btn>
      </div>

      <v-btn @click="navDrawer = !navDrawer" color="primary" rounded="circlur" class="d-md-none"
        icon="mdi-menu"></v-btn>
    </v-app-bar>
  </div>
</template>

<script setup lang="ts">
import RoutesManager from "~/core/manager/RoutesManager";
const selectedCountry=ref('');
const {update}=useAuthStore()
const authStore=useAuthStore()
const {user}=storeToRefs(authStore)
const props = defineProps(["modelValue", "countries"]);
const emit = defineEmits(["update:modelValue"]);

const navDrawer = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const navLinks = ref({
  1: { name: "العملات", link: RoutesManager.home },
  2: { name: "الدهب", link: RoutesManager.gold },
  3: { name: "الفضه", link: RoutesManager.silver },
  4: { name: "الاخبار", link: RoutesManager.news },
});


const handleSelectedCountry = (value:string)=> {
  update(value)
}

</script>

<style scoped lang="scss">
.app-bar-wrap {
  border-radius: 0 0 3em 3em;
}
.active{
  border: 2px  solid  rgb(var(--v-theme-primary));
}

.link-wrapper {
  .link-item {
    color: rgb(var(--v-theme-brand-text-color-default));
    // font-size: 18px;
    padding: 0.3em 1.5em;
    border-radius: 3em;

    &.router-link-exact-active {
      background-color: rgb(var(--v-theme-background));
    }
  }
}

.download-btn {
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;

  .icon {
    transform: rotate(-35deg) translateY(-2px);
  }
}



.countries-dropdown-wrap {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
}
</style>

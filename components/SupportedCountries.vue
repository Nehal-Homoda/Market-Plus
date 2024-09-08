<script setup lang="ts">

const props = defineProps(['countries']);
const {update}=useAuthStore()
const authStore=useAuthStore();
const {user}=storeToRefs(authStore)
const handleSelectedCountry = (value:string)=> {
  update(value)
}
</script>
<template>
  <v-sheet color="transparent" class="py-16">
    <LineBox
      title="الدول المدعومه"
      text="تابع اخر اسعار العملات و الذهب في دولتك"
    />
    <v-container>
      <div class="countries-wrap">
        <template v-for="(item) in props.countries">
          <v-card @click="handleSelectedCountry(item.id)" :class="{'active':user?.country.id==item.id}"
            class="d-flex flex-column align-center justify-center ga-2 pa-5"
            rounded="lg"
            elevation="0"
          >
            <v-img
              :src="item.icon"
              width="30"
              height="30"
            ></v-img>
            <span class="font-weight-bold">{{ item.name }}</span>
          </v-card>
        </template>
      </div>
    </v-container>
  </v-sheet>
</template>

<style scoped lang="scss">
.active{
  border: 2px  solid #1C324A;
}

.countries-wrap {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  
  @include media-breakpoint-up(sm) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @include media-breakpoint-up(md) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @include media-breakpoint-up(lg) {
    grid-template-columns: repeat(5, 1fr);
  }
  
  @include media-breakpoint-up(xl) {
    grid-template-columns: repeat(6, 1fr);
  }
  @include media-breakpoint-up(xxl) {
    grid-template-columns: repeat(8, 1fr);
  }
}
</style>

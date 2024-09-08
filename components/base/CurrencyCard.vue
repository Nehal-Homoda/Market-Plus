<template>

    <v-card elevation="0" rounded="lg"
        class="d-flex flex-column ga-2 justify-center align-center py-4">
        <h5 class="text-center font-size-large  ga-2">
            {{ currencyName }}
            <v-avatar size="22.5" :image="icon"></v-avatar>
        </h5>
        <h5 class="text-h6 font-weight-bold">{{ amount }}</h5>
        <span class="font-weight-medium">{{ user?.country.currency }}</span>
    </v-card>

</template>

<script setup lang="ts">
defineProps({
    icon: String,
    currencyName: String,
    amount: String,
})

const authStore = useAuthStore();
const { user } = storeToRefs(authStore)


</script>

<style scoped lang="scss">


</style>
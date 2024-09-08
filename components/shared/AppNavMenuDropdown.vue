<script setup lang="ts">
import { Transition } from 'vue';
import RoutesManager from '~/core/manager/RoutesManager'



const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);


const navDrawer = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emit("update:modelValue", value);
    },
});

const linkClickHandler = () => {
    
    emit("update:modelValue", false);
}

const navLinks = ref({
    1: { name: "العملات", link: RoutesManager.home, },
    2: { name: "الدهب", link: RoutesManager.gold },
    3: { name: "الفضه", link: RoutesManager.silver },
    4: { name: "الاخبار", link: RoutesManager.news },
});

</script>



<template>
    <Transition name="slideDown">
        <div v-if="navDrawer" class="app-nav-menu-dropdown rounded-b-xl elevation-5 pt-4 px-3 pb-3">
            <div class="app-nav-menu-dropdown-header d-flex align-center justify-space-between w-100 mb-10">
                <v-sheet width="100" class="me-10">
                    <v-img src="~/assets/img/logo.png"></v-img>
                </v-sheet>
                <v-btn @click="navDrawer = !navDrawer" color="primary" rounded="circlur" size="small" class="d-md-none"
                    icon="mdi-close"></v-btn>
            </div>
    
            <div class="wrap">
                <v-list lines="one">
                    <v-list-item class="rounded-lg" active-class="active" :to="item.link" @click="linkClickHandler" v-for="(item, index) in navLinks"
                        :key="index">
                        <template v-slot:title>
                            <span class="font-weight-bold"> {{ item.name }} </span>
                        </template>
                    </v-list-item>
                </v-list>
            </div>
        </div>
    </Transition>
</template>



<style scoped lang="scss">
.app-nav-menu-dropdown {
    width: 100%;
    // height: 300px;
    background-color: rgb(var(--v-theme-secondary));
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;

    .wrap {
        width: 100%;
        height: 100%;
        overflow: auto;

        .active {
            background-color: rgb(var(--v-theme-primary));
            color: white;
        }
    }
}
</style>
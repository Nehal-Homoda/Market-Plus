<template>
    <v-sheet class="py-16" color="transparent">
        <v-container>
            <div  class="text-center mb-16">
                <h2 class="text-brand-text-color-default font-weight-bold mb-2">الاسئله الشائعه</h2>
                <p class="text-brand-text-color-default text-subtitle-1 font-weight-medium">نرد على الاستفسارات الخاصة بكم في صورة سؤال وجواب </p>
            </div>
            <v-expansion-panels v-for="item in 5" class="mb-8 ">
                <v-expansion-panel color="surface"  title="كم سعر الدولار في البنوك الآن في مصر؟" class="item-border px-3 py-2"
                    text="موقع أسعار بلص في مصر هو موقع يمكنك من معرفة آخر التحديثات في أسعار الذهب في السوق المحلي في مصر بالجنيه المصري . كذلك يساعدك في حساب قيمة دولار الصاغة وأيضاً يمكنك من معرفة سعر الدولار في البنوك في مصر">
                </v-expansion-panel>
            </v-expansion-panels>
        </v-container>
    </v-sheet>
</template>

<script setup lang="ts">

</script>

<style scoped>
.item-border {
    border: 1px solid grey;
    border-radius: 0.5em;
}
</style>

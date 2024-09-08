<template>
    <v-sheet class="py-16" color="transparent">
        <v-container>

            <v-card color="primary" rounded="lg"
                class="d-flex flex-column align-center justify-center ga-10  py-10 mx-auto" max-width="950">
                <h2>حمل التطبيق الان</h2>
                <div class=" ga-8 d-flex flex-column d-md-flex flex-md-row">
                    <v-btn rounded="lg" height="60" color="background">
                        <v-img class="pe-7" width="30" height="30"
                            src="~/assets/img/icons/google-play-logo.png"></v-img>
                        <span class="font-weight-bold  "> google play</span>
                    </v-btn>
                    <v-btn rounded="lg" height="60" color="background">
                        <v-img class="pe-10 mb-1" width="30" height="30"
                            src="~/assets/img/icons/apple-logo.png"></v-img>
                        <span class="font-weight-bold ">APP Store</span>
                    </v-btn>
                </div>
                <span>Over 1 million downloads worldwide</span>

            </v-card>
        </v-container>
    </v-sheet>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
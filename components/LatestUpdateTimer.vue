<template>
    <div class="timer-wrap d-flex align-center ga-3">
        <span class="font-weight-bold text-body-2">
            اخر تحديث اليوم
            <span class="me-1">:</span>

            {{ latestUpdateDate }}
        </span>
        <div class="count-down-box">
            <svg v-if="!refreshData" width="55" height="55" xmlns="http://www.w3.org/2000/svg">
                <circle cx="27.55" cy="27.55" r="25" fill="transparent" stroke="#00000010" stroke-width="4">
                </circle>
                <circle cx="27.55" cy="27.55" r="25" fill="transparent" stroke="rgb(var(--v-theme-primary))"
                    stroke-width="4">
                    <animate attributeName="stroke-dasharray" from="0, 157" to="157, 157" dur="10s" fill="freeze" />
                </circle>
            </svg>
            <svg v-else width="55" height="55" xmlns="http://www.w3.org/2000/svg">
                <circle cx="27.55" cy="27.55" r="25" fill="transparent" stroke="#00000010" stroke-width="4">
                </circle>
            </svg>
            <span class="time font-weight-black font-size-small">
                {{ timer.minutes }}:{{ timer.seconds }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
const sharedStore = useSharedStore();
const { refreshData, timer } = storeToRefs(sharedStore);

defineProps(['latestUpdateDate'])

</script>

<style scoped lang="scss">

.count-down-box {
  width: 55px;
  height: 55px;
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;

  .time {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    direction: ltr;
  }
}

</style>
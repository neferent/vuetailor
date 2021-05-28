<template>
    <div
        :class="
            `transition-all transform ease-out duration-700 ${currentResolutionClass}`
        "
    >
        Test
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import ResolutionControlEnum from "~/js/enums/ResolutionControlEnum";

export default {
    computed: {
        ...mapGetters("KeyboardEvents", ["currentlyActiveResolutionControl"]),

        currentResolutionClass() {
            if (
                this.currentlyActiveResolutionControl ===
                ResolutionControlEnum.DESKTOP
            ) {
                return "w-full";
            } else if (
                this.currentlyActiveResolutionControl ===
                ResolutionControlEnum.TABLET
            ) {
                return "w-3/6";
            } else if (
                this.currentlyActiveResolutionControl ===
                ResolutionControlEnum.MOBILE
            ) {
                return "w-1/6";
            } else {
                return "";
            }
        }
    }
};
</script>

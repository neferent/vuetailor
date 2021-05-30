<template>
    <div
        :class="
            `transition-all transform ease-out duration-700 ${currentResolutionClass}`
        "
    >
        <!-- Added inner div to avoid the transitions from the top div -->
        <div
            :class="`w-full h-full ${focusElementClass}`"
            @dragover="handleDragOver"
            @dragend="handleDragEnd"
            @drop="handleDrop"
            @dragleave="handleDragEnd"
        >
            <component
                v-for="(component, index) in componentArray"
                :key="index"
                :is="component"
            />
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import ResolutionControlEnum from "~/js/enums/ResolutionControlEnum";
import DropPropertyMixin from "~/js/mixins/DropPropertyMixin";

export default {
    mixins: [DropPropertyMixin],

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

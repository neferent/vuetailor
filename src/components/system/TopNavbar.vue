<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <nav class="flex bg-gray-800">
        <div class="w-1/4">
            <ul class="inline-flex ml-4 mr-1 my-4 space-x-4">
                <li @click="() => handleResolutionControlClick(0)">
                    <screen-resolution-control
                        type="desktop"
                        :is-active="resolutionControlActiveIndex === 0"
                    />
                </li>
                <li @click="() => handleResolutionControlClick(1)">
                    <screen-resolution-control
                        type="tablet"
                        :is-active="resolutionControlActiveIndex === 1"
                    />
                </li>
                <li @click="() => handleResolutionControlClick(2)">
                    <screen-resolution-control
                        type="mobile"
                        :is-active="resolutionControlActiveIndex === 2"
                    />
                </li>
            </ul>
        </div>

        <div class="w-2/4">
            <g-image
                class="ml-auto mr-auto mt-2 mb-2 w-10"
                src="~/favicon.png"
                alt="Logo"
            />
        </div>

        <div class="w-1/4">
            <ul class="absolute right-0 inline-flex mr-4 my-4 space-x-4">
                <li>
                    <screen-resolution-control
                        type="download"
                        @click="handleCodeDownload"
                    />
                </li>
                <li>
                    <screen-resolution-control
                        type="help"
                        @click="handleCodeDownload"
                    />
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import ScreenResolutionControl from "./nav-components/ScreenResolutionControl.vue";
import KeyboardEventsMixin from "~/js/mixins/KeyboardEventsMixin.js";
import { mapGetters, mapActions } from "vuex";
import MutationsEnum from "~/store/modules/keyboardevents/MutationsEnum";

export default {
    mixins: [KeyboardEventsMixin],

    components: {
        ScreenResolutionControl
    },

    data() {
        return {
            resolutionControlActiveIndex: null
        };
    },

    mounted() {
        this.resolutionControlActiveIndex = this.currentlyActiveResolutionControl;
    },

    methods: {
        ...mapActions("KeyboardEvents", [MutationsEnum.CHANGE_RESOLUTION]),

        handleResolutionControlClick(index) {
            this[MutationsEnum.CHANGE_RESOLUTION](index);
        },

        handleCodeDownload() {
            this.$emit("download-code");
        }
    },

    computed: {
        ...mapGetters("KeyboardEvents", ["currentlyActiveResolutionControl"])
    },

    watch: {
        currentlyActiveResolutionControl() {
            this.resolutionControlActiveIndex = this.currentlyActiveResolutionControl;
        }
    }
};
</script>

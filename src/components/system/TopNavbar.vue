<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <nav class="bg-gray-800">
        <div class="flex">
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
                    class="ml-auto mr-auto mt-2 mb-2 w-10 h-10"
                    src="~/favicon.png"
                    alt="Logo"
                />
            </div>

            <div class="w-1/4">
                <screen-resolution-control
                    type="download"
                    @click="handleCodeDownload"
                    class="absolute right-0 mr-4 my-4"
                />
            </div>
        </div>
    </nav>
</template>

<script>
import ScreenResolutionControl from "./nav-components/ScreenResolutionControl.vue";

export default {
    components: {
        ScreenResolutionControl
    },

    data() {
        return {
            resolutionControlActiveIndex: 0,
            resolutionControlIndexMap: {
                0: "desktop",
                1: "tablet",
                2: "mobile"
            }
        };
    },

    methods: {
        handleResolutionControlClick(index) {
            this.resolutionControlActiveIndex = index;

            this.$emit(
                "resolution-control",
                this.resolutionControlIndexMap[index]
            );
        },

        handleCodeDownload() {
            this.$emit("download-code");
        }
    }
};
</script>

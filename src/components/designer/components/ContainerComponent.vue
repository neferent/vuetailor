<template>
    <div
        :class="focusElementClass"
        class="bg-green-600 w-full h-full"
        @dragover="handleDragOver"
        @dragend="handleDragEnd"
        @drop="handleDrop"
        @dragleave="handleDragEnd"
    >
        <component
            v-for="(item, index) in componentArray"
            :key="index"
            :is="item"
        />
    </div>
</template>

<script>
import ComponentDataObject from "~/js/objects/ComponentDataObject";

export default {
    data() {
        return {
            focusElementClass: "",
            componentArray: []
        };
    },

    methods: {
        handleDragOver(event) {
            event.preventDefault();

            this.focusElementClass = "border-dashed border-2 border-green-700";
        },

        handleDragEnd() {
            this.focusElementClass = "";
        },

        handleDrop(event) {
            event.preventDefault();

            this.focusElementClass = "";

            this.componentArray.push(
                ComponentDataObject.componentMap[
                    event.dataTransfer.getData("component")
                ]
            );
        }
    }
};
</script>

<template>
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
</template>

<script>
import DropPropertyMixin from "~/js/mixins/DropPropertyMixin";

export default {
    mixins: [DropPropertyMixin]
};
</script>

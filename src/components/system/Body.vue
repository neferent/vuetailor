<template>
    <div
        :class="focusElementClass"
        class="bg-pink-600 w-full h-full"
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
import DroppableEventsMixin from "~/js/mixins/DroppableEventsMixin";

export default {
    name: "body",

    mixins: [DroppableEventsMixin]
};
</script>

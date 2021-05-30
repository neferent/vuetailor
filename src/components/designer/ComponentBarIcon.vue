<template>
    <span
        :class="`p-5 bg-gray-700 ${isDragging ? 'bg-opacity-25' : ''} m-3`"
        draggable="true"
        @dragstart="elementDragStart"
        @dragend="elementDragEnd"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-window-dock w-10 h-10 cursor-pointer focus:outline-none text-gray-400 hover:text-gray-50"
            viewBox="0 0 16 16"
            v-html="componentInfo.icon"
        ></svg>
    </span>
</template>

<script>
export default {
    props: ["componentInfo"],

    data() {
        return {
            isDragging: false
        };
    },

    methods: {
        elementDragStart(event) {
            event.dataTransfer.dropEffect = "move";

            event.dataTransfer.effectAllowed = "move";

            event.dataTransfer.setData("component", this.componentInfo.name);

            this.isDragging = true;
        },

        elementDragEnd() {
            this.isDragging = false;
        }
    }
};
</script>

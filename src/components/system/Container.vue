<template>
    <div class="flex">
        <left-navbar class="w-1/6" />
        <div class="bg-gray-700 w-4/6">
            <designer-area class="bg-white overflow-y-auto m-auto h-full" />
        </div>
        <div class="bg-gray-800 w-1/6 overflow-y-auto"></div>
    </div>
</template>

<script>
import LeftNavbar from "./LeftNavbar";
import DesignerArea from "./DesignArea";

export default {
    components: {
        LeftNavbar,
        DesignerArea
    }
};
</script>

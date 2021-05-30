<template>
    <div class="flex">
        <left-navbar class="w-1/6" />
        <div class="bg-gray-700 w-4/6">
            <designer-area class="bg-white overflow-y-auto m-auto h-full" />
        </div>
        <right-components-bar />
    </div>
</template>

<script>
import LeftNavbar from "./LeftNavbar";
import DesignerArea from "./DesignArea";
import RightComponentsBar from "./RightComponentsBar";

export default {
    components: {
        LeftNavbar,
        DesignerArea,
        RightComponentsBar
    }
};
</script>

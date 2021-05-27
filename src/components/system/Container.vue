<template>
    <div class="flex">
        <left-navbar class="w-1/6" />
        <div class="bg-white w-4/6 overflow-y-auto"></div>
        <div class="bg-gray-800 w-1/6 overflow-y-auto"></div>
    </div>
</template>

<script>
import LeftNavbar from "./LeftNavbar";

export default {
    components: {
        LeftNavbar
    }
};
</script>

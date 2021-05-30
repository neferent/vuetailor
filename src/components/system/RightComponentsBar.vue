<template>
    <div class="bg-gray-800 w-1/6 overflow-y-auto">
        <div
            v-for="(mainItem, mainIndex) in availableComponentsKeys"
            :key="mainItem"
            :class="`${mainIndex > 0 ? 'mt-8' : ''}`"
        >
            <h2 class="text-white text-2xl font-normal ml-3 capitalize">
                {{ mainItem }}
            </h2>

            <div class="flex flex-row flex-wrap space-x-0.5">
                <component-bar-icon
                    v-for="(childItem, childIndex) in componentJson[mainItem]"
                    :key="`${mainItem}-${childIndex}`"
                    :component-info="childItem"
                />
            </div>
        </div>
    </div>
</template>

<script>
import ComponentDataObject from "~/js/objects/ComponentDataObject";
import ComponentBarIcon from "~/components/designer/ComponentBarIcon";

export default {
    components: {
        ComponentBarIcon
    },

    data() {
        return {
            availableComponentsKeys: Object.keys(
                ComponentDataObject.availableElementMap
            ),
            componentJson: ComponentDataObject.availableElementMap
        };
    }
};
</script>

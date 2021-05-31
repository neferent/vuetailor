import Vue from "vue";
import ComponentDataObject from "~/js/objects/ComponentDataObject";

export default component => {
    return Vue.component("withDroppableAbility", {
        data() {
            return {
                focusElementClass: "",
                componentArray: []
            };
        },

        methods: {
            handleDragOver(event) {
                event.preventDefault();

                this.focusElementClass =
                    "border-dashed border-2 border-green-700";
            },

            handleDragEnd() {
                this.focusElementClass = "";
            },

            handleDrop(event) {
                event.preventDefault();

                this.focusElementClass = "";

                const componentName = event.dataTransfer.getData("component");

                this.componentArray.push(
                    ComponentDataObject.componentMap[componentName]
                );
            }
        },

        render(createElement) {
            const childrenArray = [];

            for (const childComponent of this.componentArray) {
                childrenArray.push(createElement(childComponent));
            }

            return createElement(
                component,
                {
                    class: [this.focusElementClass],

                    attrs: {
                        draggable: true
                    },

                    nativeOn: {
                        dragover: this.handleDragOver,
                        dragend: this.handleDragEnd,
                        drop: this.handleDrop,
                        dragleave: this.handleDragEnd
                    }
                },
                childrenArray
            );
        }
    });
};

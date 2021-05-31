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

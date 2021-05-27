import KeyboardKeysEnum from "~/js/enums/KeyboardKeysEnum";

export default {
    getDescriptionArray() {
        const descriptionArray = [];

        Object.keys(KeyboardKeysEnum).forEach(item => {
            const keyboardKeyObject = KeyboardKeysEnum[item];

            descriptionArray.push(
                `Press CTRL + ${item} to ${keyboardKeyObject.description.toLowerCase()}`
            );
        });

        return descriptionArray;
    }
};

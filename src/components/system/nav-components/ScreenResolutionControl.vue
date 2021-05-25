<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        :class="
            `bi bi-window-dock w-5 h-5 cursor-pointer focus:outline-none ${activeClass}`
        "
        viewBox="0 0 16 16"
        v-html="controlSVG.code"
        v-tooltip="controlSVG.tooltip"
    ></svg>
</template>

<script>
export default {
    props: ["type", "isActive"],

    data() {
        return {
            resolutionControlIcons: {
                desktop: {
                    code: `<path fill-rule="evenodd" d="M15 5H1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5zm0-1H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1zm1-1a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3z" /> <path d="M3 11.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm4 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm4 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>`,
                    tooltip: "View desktop resolution"
                },
                tablet: {
                    code: `<path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" /> <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />`,
                    tooltip: "View tablet resolution"
                },
                mobile: {
                    code: `<path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" /> <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />`,
                    tooltip: "View mobile resolution"
                },
                download: {
                    code: `<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/> <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>`,
                    tooltip: "Export code"
                }
            }
        };
    },

    computed: {
        controlSVG() {
            return this.resolutionControlIcons[this.type];
        },

        activeClass() {
            return this.isActive
                ? "text-gray-50"
                : "text-gray-400 hover:text-gray-50";
        }
    }
};
</script>

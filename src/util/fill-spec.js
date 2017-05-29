import specTemplates from "../../node_modules/skaggr-spec/index.js";

export default function fillSpecFromTemplate(spec) {
    var templateSpec = specTemplates[spec.type];
    var template = Object.keys(templateSpec.properties).reduce((acc,curr) => {
        acc[curr] = templateSpec.properties[curr].defaultValue;
        return acc;
    },{});

    return Object.assign(template, spec);
}
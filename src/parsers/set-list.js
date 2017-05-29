export default function parseSetList(spec, parser) {
    // Init string
    var str = "{";

    // Add set list
    str += spec.value.join(",") + "}";

    return str;
}
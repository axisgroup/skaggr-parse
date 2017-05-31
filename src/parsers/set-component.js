export default function parseSetComponent(spec, parser) {
    // Init string
    var str = "";

    // Add identifier
    str += spec.identifier;

    // Add modifiers
    if(spec.modifiers.length > 0) {
        str += "<";
        var mods = [];
        spec.modifiers.forEach((setModifier, i) => {
            mods.push(parser(setModifier));
        });
        str += mods.join(", ") + ">";
    }
    

    return str;
}
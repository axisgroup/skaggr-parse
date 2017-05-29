export default function parseQualifier(spec, parser) {
    // Init string
    var str = "";

    if(spec.included) {
        // Add value
        str += spec.value;

        // Add modifiers
        if(spec.modifiers.length > 0) {
            str += `<${spec.modifiers.join(",")}>`;
        }
        
        str += " ";
    }
    
    return str;
}
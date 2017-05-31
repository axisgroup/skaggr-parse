export default function parseSetModifier(spec, parser) {
    // Init string
    var str = "";

    // Add forced exclusion
    if(spec.forcedExclusion) str += "~";

    // Add field
    str += spec.field;

    // Add operator
    str += ` ${spec.operator} `;

    // Add selections
    if(spec.selections.length > 0) {
        spec.selections.forEach((setSelection, i) => {
            if(i > 0) str += ` ${spec.selectionOperators[i-1]} `;
            str += parser(setSelection);
        });
    }
    
    return str;
}
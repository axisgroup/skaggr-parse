export default function parseAggr(spec, parser) {
    // Init string
    var str = "";

    // Add type
    str += spec.value + "(";

    // Add set
    str += parser(spec.set);
    
    /*
    if(spec.set.length > 0) {
        str += "{";
        spec.set.forEach((setComponent, i) => {
            if(i > 0) str += ` ${setComponent.operator} `;
            str += parser(setComponent);
        });
        str +="} "
    }
    */
    
    // Add qualifiers
    spec.qualifiers.forEach((qualifier, i) => {
        str += `${parser(qualifier)}`;
    });

    // Add parameters
    spec.parameters.forEach((param, i) => {
        if(i > 0) str += ", ";
        str += parser(param);
    });

    str += ")";

    return str;
}
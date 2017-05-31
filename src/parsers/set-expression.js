export default function parseSetExpression(spec, parser) {
    // Init string
    var str = "";

    // Add components
    if(spec.components.length > 0) {
        str += "{"
        spec.components.forEach((setComponent, i) => {
            if(i > 0) str += ` ${spec.operators[i-1]} `;
            str += `${parser(setComponent)}`;
        });
        str += "} ";
    }
    
    return str;
}
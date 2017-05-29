export default function parseFunction(spec, parser) {
    // Init string
    var str = "";

    // Add function name
    str += spec.value + "(";

    var parameters = [];

    // Add parameters
    if(spec.parameters.length > 0) {
        spec.parameters.forEach((parameter, i) => {
            parameters.push(parser(parameter));
        });
    }

    str += parameters.join(", ") + ")";
    
    return str;
}
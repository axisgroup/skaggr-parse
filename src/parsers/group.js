export default function parseGroup(spec, parser) {
    // Init values
    var values = spec.brackets ? ["(",")"] : ["",""];

    // Add values
    if(spec.value.length > 0) {
        spec.value.forEach((value, i) => {
            values.splice(-1,0,`${spec.operators[i]}`);
            values.splice(-1,0,parser(value));
        });
    }
    
    return values.join("");
}
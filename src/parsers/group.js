export default function parseGroup(spec, parser) {
    // Init values
    var values = spec.brackets ? ["(",")"] : ["",""];

    // Add values
    if(spec.value.length > 0) {
        spec.value.forEach((value, i) => {
            if(i > 0) values.splice(-1,0,` ${value.operator} `);
            values.splice(-1,0,parser(value));
        });
    }
    
    return values.join("");
}
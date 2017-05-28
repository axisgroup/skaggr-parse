var exSpec = {
    type: "aggr",
    value: "sum",
    parameters: [
        {
    	    type: "explicit",
            value: "Sales"
        }
    ]
};

var skaggrParse = function(spec) {
    var value;
    switch(spec.type) {
        case "aggr":
            value = parseAggr(spec);
            break;
        case "explicit":
            value = parseExplicit(spec);
            break;
        default:
            value = "";
            break;
    }
    return value;
}

function parseAggr(spec) {
    // Init string
    var str = "";

    // Add type
    str += spec.value + "(";

    // Add set
    
    // Add qualifiers

    // Add parameters
    spec.parameters.forEach((param) => {
        str += skaggrParse(param);
    });

    str += ")";

    return str;
}

function parseExplicit(spec) {
    return spec.value;
}
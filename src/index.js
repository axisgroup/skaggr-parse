import parseAggr from "./parsers/aggr";
import parseExplicit from "./parsers/explicit";
import parseQualifier from "./parsers/qualifier";
import parseSetExpression from "./parsers/set-expression";
import parseSetComponent from "./parsers/set-component";
import parseSetModifier from "./parsers/set-modifier";
import parseSetField from "./parsers/set-field";
import parseSetList from "./parsers/set-list";
import parseGroup from "./parsers/group";
import parseFunction from "./parsers/function";
import fillSpec from "./util/fill-spec";

var skaggrParse = function(spec) {

    var filledSpec = fillSpec(spec);

    var value;
    switch(spec.type) {
        case "aggr":
            value = parseAggr(filledSpec, skaggrParse);
            break;
        case "explicit":
            value = parseExplicit(filledSpec, skaggrParse);
            break;
        case "qualifier":
            value = parseQualifier(filledSpec, skaggrParse);
            break;
        case "set-expression":
            value = parseSetExpression(filledSpec, skaggrParse);
            break;
        case "set-component":
            value = parseSetComponent(filledSpec, skaggrParse);
            break;
        case "set-modifier":
            value = parseSetModifier(filledSpec, skaggrParse);
            break;
        case "set-field":
            value = parseSetField(filledSpec, skaggrParse);
            break;
        case "set-list":
            value = parseSetList(filledSpec, skaggrParse);
            break;
        case "group":
            value = parseGroup(filledSpec, skaggrParse);
            break;
        case "function":
            value = parseFunction(filledSpec, skaggrParse);
            break;
        default:
            value = "";
            break;
    }
    return value;
}

export default skaggrParse;
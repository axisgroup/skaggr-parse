# skaggr-parse
*A JavaScript parser that will take a JSON in skaggr-spec format and output a Qlik expression string*

## Motivation
See the [skaggr-spec README](https://github.com/axisgroup/skaggr-spec) for more details on the thinking behind skaggr-spec. This parser is a tool for taking those specs, which could be produced by automated tools or GUIs, and translating them into strings that can be fed to Qlik for calculations.


#### Example: Sum of Sales
```
var mySpec = {
    type: "aggr",
    value: "sum",
    parameters: [
        {
            type: "explicit",
            value: "Sales"
        }
    ]
};

var myExpr = skaggrParse(mySpec); // -> "sum(Sales)"
```
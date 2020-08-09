# VMFUnParser

[VMF](https://developer.valvesoftware.com/wiki/Valve_Map_Format) is the format used by the [Hammer editor](https://developer.valvesoftware.com/wiki/Valve_Hammer_Editor) to store maps before their
compilation. Since VMF has a syntax similar to JSON, [leops](https://github.com/leops) decided to write a [VMF
parser](https://www.npmjs.com/package/vmfparser) in JavaScript and I decided to write a VMF unparser to turn JSON back into VMF. I have some idea why.

## Usage

The module exports a single `vmfunparser(input)` function. The `input` is a
JSON object source object.

```js
const fs = require("fs");

const vmfunparser = require("vmfunparser");

// ...take output from vmfparser
let vmf_as_json = {};

// ...now open in Hammer
fs.writeFileSync("map.vmf", vmfunparser(vmf_as_json));
```

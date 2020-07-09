/**
 * Node.js modules
 */
import { readFileSync } from "fs";
import { join } from "path";

/**
 * Npm packages (for testing)
 */
const vmfparser = require("vmfparser");
import * as chai from "chai";

/**
 * Self
 */
const vmfunparser = require("../");

describe("Read from sample.vmf", () => {
    let sample_as_vmf: string = readFileSync(join(__dirname, "..", "..", "..", "src", "test", "sample.vmf"), "utf8");

    it("Is string", () => chai.expect(sample_as_vmf).to.be.a("string"));

    describe("Parse vmf to json", () => {
        let sample_as_json: object = vmfparser(sample_as_vmf);

        it("Is object", () => chai.expect(sample_as_json).to.be.an("object"));

        describe("Unparse json to vmf", () => {
            let sample_as_vmf_again: string = vmfunparser(sample_as_json);

            it("Is string", () => chai.expect(sample_as_vmf_again).to.be.a("string"));

            it("Matches input", () => chai.expect(sample_as_vmf).to.equal(sample_as_vmf));
        });
    });
});

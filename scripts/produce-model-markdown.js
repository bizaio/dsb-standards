//requiring path and fs modules
const path = require('path');
const fs = require('fs');

process('../openapi/components/schemas', function (file) {
    return file.endsWith("yaml") && !file.startsWith("Enum") && !file.startsWith("Response");
}, 'openapi/openapi-schemas.md');
process('../openapi/components/schemas', function (file) {
    return file.endsWith("yaml") && file.startsWith("Enum");
}, 'openapi/openapi-enumerations.md');
process('../openapi/components/schemas', function (file) {
    return file.endsWith("yaml") && !file.startsWith("Response");
}, 'openapi/openapi-responses.md');

function process(inputPath, filter, outputFile) {
    const schemasPath = path.join(__dirname, inputPath);

    fs.readdir(schemasPath, function (err, files) {
        if (err) {
            return console.log('Unable to scan schemas directory: ' + err);
        }
        var schemas = {};

        files.forEach(function (file) {

            if (filter != null && !filter(file)) {
                return;
            }

            modelVersion = file.replace(/\.yaml$/, "");
            modelName = modelVersion.replace(/V\d+$/, "");

            if (!schemas[modelName]) {
                schemas[modelName] = "";
            }

            schemas[modelName] += "## " + modelVersion +
                "\n<SchemaDefinition schemaRef=\"#/components/schemas/" + modelVersion + "\" />\n\n";
        });

        let schemasStream = fs.createWriteStream(outputFile);
        Object.keys(schemas).forEach(function (key) {
            schemasStream.write("# " + key + "\n\n" + schemas[key] + "\n\n");
        });
        schemasStream.close();
    });
}

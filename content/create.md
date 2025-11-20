---
title: "Create a CodeMeta file"
layout: single
---

Need to generate a CodeMeta compliant metadata file? The folks at
[Software Heritage](https://www.softwareheritage.org) maintain this tool to
make that easy.

Click the button below to open the CodeMeta generator in a new tab. The tool
is both a generator and a validator for `codemeta.json` files.

## Create a new CodeMeta file

Generate a CodeMeta file by filling out the fields in the form according to 
the [CodeMeta terms](/terms) definitions. The `Name` field in the first 
section is mandatory.

Providing the `Name` of your software will result in a basic `codemeta.json`
output in the final textarea. Filling out additional fields will build a
more complete file. The version of CodeMeta can be selected with the
`Generate codemeta.json v2.0` or `Generate codemeta.json v3.0` buttons above
the final textarea.

Some fields require specific formatting. The example text in the fields will
hint the required formatting. Errors will be highlighted by the generator as
they are encountered.

Your generated file may be copied from the text area, or downloaded with the
`Download codemeta.json` button above the field.

## Check a CodeMeta file

Pasting the contents of your current `codemeta.json` file into the final
textarea will allow you to:
- Validate the syntax with the `Validate codemeta.json` button, and
- Pre-fill the other form fields with your current values using the
`Import codemeta.json` button.


{{< rawhtml >}}
  <a class="fw-bold btn btn-lg btn-primary my-5" href="/codemeta-generator" target="_blank">Open the CodeMeta Generator</a><br>

  <a href="https://www.softwareheritage.org">
  <img alt="" src="/img/swh-logo.png" style="height: 50px;"/> Software Heritage</a>
{{< /rawhtml >}}

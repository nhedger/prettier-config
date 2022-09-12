import { Config } from "prettier";

const config: Config = {
    // Use spaces to indent instead of tabs
    useTabs: false,

    // Indent with 4 spaces by default
    tabWidth: 4,

    // Indent script and style tags in Vue SFCs
    vueIndentScriptAndStyle: true,

    // Ensure the closing bracket of HTML-like elements stays on the same line
    bracketSameLine: true,

    // Add trailing commas to objects and array definitions
    trailingComma: "es5",

    // Ensure bracket spacing in object literals
    bracketSpacing: true,

    // Always add arrow function parentheses
    arrowParens: "always",

    // Use line feeds only
    endOfLine: "lf",

    // Use single quotes
    singleQuote: true,

    // Keep consistent quotes
    quoteProps: "consistent",

    // Always add semicolons
    semi: true,

    // Make the default print width a bit larger
    printWidth: 80,

    // Overrides
    overrides: [
        {
            files: ["*.yml", ".yaml"],
            options: {
                tabWidth: 2
            }
        }
    ]
};

export default config;

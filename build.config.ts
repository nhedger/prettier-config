import path from "path";
import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
    entries: [path.resolve(__dirname, "src", "prettier.config")],
    clean: true,
    rollup: {
        emitCJS: true,
    },
});

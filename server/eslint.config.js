export default [
    {
        ignores: ["node_modules/**", "dist/**", "coverage/**"],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: {
                console: "readonly",
                process: "readonly",
                Buffer: "readonly",
                __dirname: "readonly",
                __filename: "readonly"
            }
        },
        rules: {}
    }
];

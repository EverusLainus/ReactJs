### Code Formatting with prettier and Husky

1.  Install Prettier
    `npm install --save-dev prettier`
2.  Configure Prettier
    Create a Prettier configuration file in the root of your project. You can use either .prettierrc or .prettierrc.json.

        `{
        "semi": true,
        "singleQuote": true,
        "trailingComma": "es5",
        "printWidth": 80,
        "tabWidth": 2
        }`

Optional: Create a .prettierignore file to specify files and directories that Prettier should ignore.

.prettierignore:

`node_modules
dist
build `

3.  Add Prettier Scripts to package.json
    Add scripts in your package.json to format your codebase with Prettier.

            `package.json:

            {
            "scripts": {
            "format": "prettier --write .",
            "format:check": "prettier --check ."
            }
            }`
        4. Integrate Prettier with Your Code Editor Visual Studio Code

    Install the Prettier extension: Search for "Prettier - Code formatter" in the Extensions view and install it.

- Install Husky and Lint-Staged:
  `npm install --save-dev husky lint-staged`
- Add Husky and Lint-Staged configuration:

Add the following to your package.json:

        `{
        "husky": {
        "hooks": {
        "pre-commit": "lint-staged"
        }
        },
        "lint-staged": {`

"\*.{js,jsx,ts,tsx,json,css,scss,md}": ["prettier --write", "git add"]
}
}

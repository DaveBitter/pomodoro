module.exports = {
    rootDir: '../../',
    collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx,mjs}", "!**/*.(stories.tsx)"],
    testMatch: ["<rootDir>/**/?(*.)(spec|test).{js,jsx,ts,tsx,mjs}"],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        "^.+\\.(js|jsx|ts|tsx|mjs)$": "./config/tests/transformers/transform.ts",
        "^.+\\.css$": "./config/tests/transformers/cssTransform.ts",
        "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "./config/tests/transformers/fileTransform.ts",
    },
    setupFilesAfterEnv: ["./config/tests/setup/setupTests.ts"],
    transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx|mjs)$"],
    moduleNameMapper: {
        "(copy|dictionary|headings)+(.md)$": "<rootDir>/config/tests/mocks/content/general.ts",
        "(articles)+(.md)$": "<rootDir>/config/tests/mocks/content/articles.ts",
        "\\.svg": "<rootDir>/config/tests/mocks/components/Svg.tsx"
    },
    globals: {
        'ts-jest': {
            tsConfig: {
                jsx: 'react'
            }
        }
    }
};

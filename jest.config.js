module.exports = {
  "roots": [
    "<rootDir>/tests/unit"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "globals": {
    "ts-jest": {
      "tsConfig": "<rootDir>/tests/unit/tsconfig.json"
    }
  },
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))(\\.js|\\.ts)x?$",
  "testPathIgnorePatterns": ["/node_modules/"]
}
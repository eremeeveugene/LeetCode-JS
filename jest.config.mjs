export default {
  moduleNameMapper: {
    "^@javascript/(.*)$": "<rootDir>/source/solutions/javascript/$1",
    "^@algorithms/(.*)$": "<rootDir>/source/solutions/algorithms/$1",
  },
  testEnvironment: "node",
  transform: {},
};

export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "app/(.*)$": "<rootDir>/src/$1",
  }
}
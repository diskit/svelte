const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "app/(.*)$": "<rootDir>/src/$1",
  }
}

export default config
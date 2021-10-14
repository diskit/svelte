const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "src(.*)$": "<rootDir>/src/$1"
  }
}

export default config
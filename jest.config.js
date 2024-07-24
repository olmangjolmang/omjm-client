module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest", // 추가된 부분: ES6 모듈 지원
  },
  transformIgnorePatterns: [
    "/node_modules", // 추가된 부분: axios 모듈 변환
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(svg)$": "<rootDir>/__mocks__/svgMock.js",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};

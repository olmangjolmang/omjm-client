module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "babel-jest",
    "^.+\\.jsx?$": "babel-jest", // 추가된 부분: ES6 모듈 지원
  },
  transformIgnorePatterns: [
    "/node_modules/(?!axios)/", // 추가된 부분: axios 모듈 변환
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/__mocks__/fileMock.js",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};

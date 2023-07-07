module.exports = {
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    setupFilesAfterEnv: ['<rootDir>/setup.config.js'],
    moduleNameMapper: {
      '\\.(scss|less|sass|css)$': 'identity-obj-proxy',
    },
    transform: {
        '^.+\\.tsx?$': 'babel-jest',
      },
    testEnvironment: 'jsdom',
  };
  
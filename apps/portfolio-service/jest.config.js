module.exports = {
  coverageDirectory: '../../coverage/apps/portfolio-service',
  displayName: 'portfolio-service',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  moduleFileExtensions: ['html', 'js', 'ts'],
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
};

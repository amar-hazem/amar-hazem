module.exports = {
  coverageDirectory: '../../coverage/apps/amar-hazem-service',
  displayName: 'amar-hazem-service',
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

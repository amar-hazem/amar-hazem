module.exports = {
  coverageDirectory: '../../coverage/apps/portfolio-gateway',
  displayName: 'portfolio-gateway',
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

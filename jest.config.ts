import {Config} from 'jest'
import {compilerOptions} from './tsconfig.json'
import {pathsToModuleNameMapper} from 'ts-jest'

const config: Config = {
  displayName: 'all',
  globals: {},
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', {tsconfig: 'tsconfig.json'}],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  //   rootDir: '',
  //   coverageDirectory: './coverage/',
  //   testPathIgnorePatterns: [''],
  // this enables us to use tsconfig-paths with jest
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  testTimeout: 150000,
}

export default config

module.exports = {
    testEnvironment: 'jsdom',  // Usa el entorno jsdom para las pruebas
    moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],  // Configura los directorios en los que Jest buscará módulos
    testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/dist'],  // Ignora pruebas en estos directorios
    collectCoverage: true,  // Habilita la recolección de cobertura de código
    setupFilesAfterEnv: ['@testing-library/jest-dom/'],  // Configura jest-dom para pruebas de DOM
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',  // Transforma archivos JS y JSX con Babel
    },
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/test/__mocks__/fileMock.js',  // Mocks para imágenes y SVG
    },
  };
  
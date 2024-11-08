// babel.config.js
module.exports = {
    presets: [
      '@babel/preset-env',      // Transpila el código moderno a una versión compatible con Node.js
      '@babel/preset-react',    // Transpila JSX a JavaScript
    ],
    plugins: [
      '@babel/plugin-transform-modules-commonjs',  // Convierte los módulos ESM a CommonJS
    ],
  };
  
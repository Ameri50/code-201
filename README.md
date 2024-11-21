# Autor  

- **Nombre Completo:** Josue Rojas  
- **Nombre del Curso:** Code 101  
- **Correo Electrónico:** [ssj52949@gmail.com](mailto:ssj52949@gmail.com)  
- **Fecha de Creación del Proyecto:** 20 de noviembre de 2024  

---

## Sobre el Proyecto  

**“La Web Moderna”** es un recurso diseñado para que cualquier Desarrollador de Software aprenda los conceptos clave necesarios para crear aplicaciones web robustas y modernas.  

---

## eslintrc  

El archivo `.eslintrc.json` contiene configuraciones para **ESLint**, una herramienta que ayuda a mantener un código limpio y sin errores en proyectos JavaScript.  

## Despliegue

- [https://github.com/Ameri50/web-moderna]
- [https://ameri50.github.io/web-moderna/]

### Configuración

```json
{
  "env": {
    "browser": true, // Habilita las variables globales del navegador (window, document, etc.)
    "es2021": true   // Permite usar características modernas de ECMAScript 2021.
  },
  "extends": ["eslint:recommended"], // Usa las reglas recomendadas por ESLint como base.
  "parserOptions": {
    "ecmaVersion": "latest", // Habilita la sintaxis más reciente de ECMAScript.
    "sourceType": "module"   // Permite el uso de módulos ES6 (import/export).
  },
  "rules": {
    "indent": ["error", 2],           // Obliga a usar una indentación de 2 espacios.
    "linebreak-style": ["error", "unix"], // Requiere saltos de línea en formato Unix (\n).
    "quotes": ["error", "single"],   // Obliga a usar comillas simples para cadenas.
    "semi": ["error", "always"],     // Requiere punto y coma al final de cada declaración.
    "no-unused-vars": "warn",        // Genera advertencia si hay variables no usadas.
    "no-console": "warn"             // Genera advertencia si se usa console.log (útil en producción).
  }
}

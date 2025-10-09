# Instalación del proyecto

## Requisitos previos

- Node.js (versión 14 o superior)
- npm (normalmente viene con Node.js)
- Git

## Instalación desde cero (para desarrolladores principales)

1. Inicializa el proyecto npm dentro del repositorio

```bash
npm init -y
```

2. Instalar Snowpack y sus plugins para React

```bash
npm install --save-dev snowpack @snowpack/app-scripts-react @snowpack/plugin-react-refresh @snowpack/plugin-dotenv
```

3. Instalar React y React DOM

```bash
npm install react react-dom
```

## Instalación después de clonar el repositorio

1. Clonar el repositorio

```bash
git clone https://github.com/ieeecsutp/wowiplat.git
cd wowiplat
```

2. Instalar todas las dependencias

```bash
npm install
```

## Comandos disponibles

Una vez instalado el proyecto, puedes usar los siguientes comandos:

- Iniciar el servidor de desarrollo:

```bash
npm start
```

El servidor se iniciará en `http://localhost:3000`

- Construir el proyecto para producción:

```bash
npm run build
```

Los archivos de producción se generarán en la carpeta `build/`

## Estructura del proyecto

```
wowiplat/
├── public/          # Archivos estáticos
│   └── index.html
├── src/            # Código fuente
│   ├── App.jsx     # Componente principal
│   ├── App.css     # Estilos del componente principal
│   ├── index.jsx   # Punto de entrada
│   └── index.css   # Estilos globales
└── snowpack.config.js  # Configuración de Snowpack
```

## Solución de problemas comunes

Si encuentras algún error durante la instalación o ejecución:

1. Asegúrate de tener las versiones correctas de Node.js y npm
2. Intenta eliminar la carpeta `node_modules` y el archivo `package-lock.json`, luego ejecuta `npm install` nuevamente
3. Verifica que todos los archivos de configuración estén presentes en el proyecto
4. Si el servidor de desarrollo no inicia, asegúrate de que el puerto 3000 no esté siendo usado por otra aplicación

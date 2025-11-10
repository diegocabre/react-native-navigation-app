📱 react-native-navigation-app
Este repositorio es una aplicación de ejemplo construida con React Native que demuestra una estructura de navegación avanzada y bien organizada, utilizando Expo Router y React Navigation. Implementa patrones de navegación comunes como el menú lateral (Drawer), pestañas inferiores (Tabs) y la navegación jerárquica (Stack), todos anidados de manera eficiente.

✨ Características Principales
Navegación Anidada Completa: Combina Drawer Navigator (menú lateral) con Bottom Tab Navigator (pestañas inferiores) y Stack Navigator (pila de pantallas) para una arquitectura robusta.

Tipado Estricto (TypeScript): Usa TypeScript para garantizar la seguridad y la predictibilidad del código, especialmente en la definición de rutas y parámetros de navegación.

Gestión de Cabecera Personalizada: Implementa una lógica personalizada en la cabecera (headerLeft) para alternar entre el botón de "Volver" y el botón de "Menú" del Drawer, asegurando una experiencia de usuario fluida.

Estilo Consistente: Define estilos globales en screenOptions para mantener una apariencia uniforme en toda la aplicación.

Componente Drawer Personalizado: Incluye un componente CustomDrawer para la máxima personalización del menú lateral.

🚀 Cómo Empezar
Sigue estos pasos para clonar el repositorio y ejecutar la aplicación en tu entorno de desarrollo.

Prerrequisitos
Asegúrate de tener instalado:

Node.js (LTS recomendado)

Yarn o npm

Expo CLI (instalado globalmente o usando npx)

Instalación
Clonar el Repositorio:

Bash

git clone https://github.com/diegocabre/react-native-navigation-app.git
cd react-native-navigation-app
Instalar Dependencias:

Bash

npm install

# o si usas Yarn:

# yarn install

Ejecutar la Aplicación:

Bash

npx expo start
Esto abrirá Expo Dev Tools en tu navegador. Puedes escanear el código QR con la aplicación Expo Go en tu dispositivo móvil o usar un simulador/emulador.

📁 Estructura del Proyecto
El proyecto sigue la convención de archivos de Expo Router para definir la navegación:

├── app/
│ ├── (tabs)/ # Contiene el Bottom Tab Navigator
│ │ ├── \_layout.tsx # Configuración del Tab Navigator
│ │ ├── home/ # Stack para la pantalla 'Inicio'
│ │ ├── products/ # Stack para la pantalla 'Productos'
│ │ └── ...
│ ├── \_layout.tsx # Contiene el Drawer Navigator (DrawerLayout)
│ ├── user/index.tsx # Pantalla fuera de las pestañas
│ └── schedule/index.tsx # Pantalla fuera de las pestañas
├── components/
│ └── shared/CustomDrawer.tsx # Componente para el contenido del Drawer
└── app/\_layout.tsx # Contiene el Stack Navigator (StackLayout)
⚙️ Tecnologías Utilizadas
React Native

Expo

Expo Router (Sistema de enrutamiento basado en archivos)

React Navigation (Librería de navegación subyacente)

TypeScript (Para tipado)

@expo/vector-icons (Ionicons)

🤝 Contribuciones
Las contribuciones son bienvenidas. Por favor, abre un issue o un Pull Request para cualquier mejora.

📄 Licencia
Este proyecto está bajo la Licencia MIT.

El siguiente video ofrece una introducción a los conceptos de navegación en React Native, algo fundamental para entender la estructura de este repositorio: React Native Navigation Tutorial para principiantes.

React Native Navigation Tutorial para principiantes - YouTube
Code with Beto en Español · 30 k vistas

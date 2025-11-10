# 📱 react-native-navigation-app

Este repositorio es una aplicación de ejemplo construida con **React Native** que demuestra una estructura de navegación avanzada y bien organizada, utilizando **Expo Router** y **React Navigation**. Implementa patrones de navegación comunes como el menú lateral (Drawer), pestañas inferiores (Tabs) y la navegación jerárquica (Stack), todos anidados de manera eficiente.

## ✨ Características Principales

- **Navegación Anidada Completa:** Combina **Drawer Navigator** (menú lateral) con **Bottom Tab Navigator** (pestañas inferiores) y **Stack Navigator** (pila de pantallas) para una arquitectura robusta.
- **Tipado Estricto (TypeScript):** Usa **TypeScript** para garantizar la seguridad y la predictibilidad del código.
- **Gestión de Cabecera Personalizada:** Implementa una lógica personalizada en la cabecera (`headerLeft`) para alternar entre los botones **"Volver"** y **"Menú"** (Toggle Drawer).
- **Componente Drawer Personalizado:** Incluye un `CustomDrawer` para la máxima personalización del menú lateral.

---

## 🚀 Cómo Empezar

Sigue estos pasos para clonar el repositorio y ejecutar la aplicación en tu entorno de desarrollo.

### Prerrequisitos

Asegúrate de tener instalado:

- Node.js (LTS recomendado)
- Yarn o npm
- Expo CLI (instalado globalmente o usando `npx`)

### Instalación

1.  **Clonar el Repositorio:**

    ```bash
    git clone [https://github.com/diegocabre/react-native-navigation-app.git](https://github.com/diegocabre/react-native-navigation-app.git)
    cd react-native-navigation-app
    ```

2.  **Instalar Dependencias:**

    ```bash
    npm install
    # o si usas Yarn:
    # yarn install
    ```

3.  **Ejecutar la Aplicación:**

    ```bash
    npx expo start
    ```

    Esto abrirá Expo Dev Tools en tu navegador. Puedes escanear el código QR con la aplicación **Expo Go** o usar un simulador/emulador.

---

## 📁 Estructura del Proyecto

El proyecto sigue la convención de archivos de **Expo Router** para definir la navegación:

```text
.
├── app/
│   ├── (tabs)/                # Contiene el Bottom Tab Navigator
│   │   ├── _layout.tsx        # Configuración del Tab Navigator
│   │   ├── home/              # Stack para la pantalla 'Inicio'
│   │   ├── products/          # Stack para la pantalla 'Productos'
│   │   └── ...
│   ├── _layout.tsx            # Contiene el Drawer Navigator (DrawerLayout)
│   ├── user/index.tsx         # Pantalla fuera de las pestañas
│   └── schedule/index.tsx     # Pantalla fuera de las pestañas
├── components/
│   └── shared/
│       └── CustomDrawer.tsx   # Contenido personalizado del menú
└── app/_layout.tsx            # Contiene el Stack Navigator (StackLayout)
```

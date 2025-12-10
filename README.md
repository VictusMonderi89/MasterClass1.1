# MobileShop - Tienda Online de Accesorios para Dispositivos Móviles

Sitio web profesional de comercio electrónico especializado en accesorios premium para dispositivos móviles y tablets.

## 🎨 Características de Diseño

- **Paleta de colores**: Corporativa, minimalista y elegante con tonos negros, grises oscuros y degradados sutiles
- **Tipografía**: Sans-serif tipo Helvetica Neue para máxima legibilidad
- **Diseño responsive**: Totalmente adaptable a móviles, tablets y escritorio
- **Interfaz moderna**: Componentes UI profesionales con animaciones suaves

## 🛍️ Estructura de la Tienda

### Menús Principales
1. **Cases** - Fundas y estuches protectores
2. **Micas** - Protectores de pantalla premium
3. **Protectores** - Protección especializada para cámara y dispositivo

### Submenú de Marcas
- Samsung
- Xiaomi
- Motorola
- Oppo
- iPhone (destacado)

## 🚀 Tecnologías Utilizadas

- **Frontend**: React 18
- **Routing**: React Router DOM v6
- **Build Tool**: Vite
- **Estilos**: CSS puro con variables CSS y sistema de diseño modular
- **Gestión de Estado**: Context API de React

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm build
```

## 🌐 Desarrollo

El servidor de desarrollo se ejecuta en `http://localhost:3000/`

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── cart/          # Componentes del carrito
│   ├── common/        # Header, Footer, Navigation
│   ├── layout/        # Layouts de página
│   ├── products/      # Cards y detalles de productos
│   └── ui/            # Componentes UI reutilizables
├── context/           # Context API providers
├── data/              # Datos JSON de productos
├── pages/             # Páginas de la aplicación
├── styles/            # Estilos globales y utilidades
└── App.jsx            # Componente principal
```

## ✨ Características Implementadas

- ✅ Navegación responsive con menú móvil
- ✅ Sistema de carrito de compras con persistencia en localStorage
- ✅ Búsqueda de productos en tiempo real
- ✅ Filtrado por categorías y marcas
- ✅ Vista detallada de productos
- ✅ Productos destacados
- ✅ Diseño minimalista y profesional
- ✅ Animaciones suaves
- ✅ Componentes UI reutilizables

## 🎯 Páginas

- `/` - Página de inicio con productos destacados
- `/cases` - Categoría Cases
- `/micas` - Categoría Micas
- `/protectores` - Categoría Protectores
- `/iphone` - Productos iPhone
- `/marcas/:brand` - Productos por marca
- `/producto/:id` - Detalle del producto
- `/about` - Acerca de nosotros

## 📱 Responsive Design

El sitio está optimizado para:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Sistema de Diseño

- Variables CSS para colores, tipografía y espaciado
- Sistema de grid flexible
- Componentes modulares y reutilizables
- Utilidades CSS para desarrollo rápido

---

Desarrollado con ❤️ usando React y Vite

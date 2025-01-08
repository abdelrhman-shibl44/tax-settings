# Tax Settings Page

This is a **Tax Settings** page built using **Next.js**, **React**, **Tailwind CSS**, and **ShadCN UI**. It is part of a larger web application that allows users to manage the tax settings of their store. The page provides an intuitive and dynamic interface for handling tax settings, including VAT (Value Added Tax) configuration, and supports language switching functionality. It also includes **Light** and **Dark Mode** support.

## Features

- **Language Switcher**:
  - Allows users to switch between languages (e.g., English, Arabic).
  - The language switcher dynamically adjusts the page based on the current URL, retaining other parts of the URL such as query parameters.
- **Breadcrumb Navigation**:
  - Displays the current path dynamically in the header, allowing users to easily navigate and understand their current location within the application.
- **Tax Settings Form**:
  - Users can set their tax rates, specifically VAT settings.
  - The form fields allow for flexible input and proper validation, ensuring that users input valid data.
- **Responsive Design**:

  - The page is fully responsive and adjusts according to the screen size, making it mobile-friendly.

- **Internationalization (i18n)**:

  - The page supports multiple languages (English and Arabic), and the UI adapts to the appropriate text direction based on the language selected (e.g., RTL for Arabic).

- **Light and Dark Mode**:

  - The page supports both **light** and **dark modes**, allowing users to toggle between themes for a personalized viewing experience.
  - The selected theme persists across sessions using local storage.

- **ShadCN UI Components**:
  - The page uses ShadCN UI for building accessible and customizable UI elements like buttons, dropdowns, and modal dialogs.
  - Provides a consistent and responsive UI with polished components, powered by **Tailwind CSS**.

## Installation

To get started with the project, clone the repository and install the dependencies.

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/tax-settings-page.git
   ```

2. Navigate to the project directory:

   ```bash
   cd tax-settings-page
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Install ShadCN UI if you haven't already:

   ```bash
   npm install @shadcn/ui
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Visit `http://localhost:3000` in your browser to see the page in action.

## Directory Structure

- **`/pages/tax-settings`**: Contains the main Tax Settings page component.
- **`/components`**: Contains reusable UI components like buttons, dropdowns, and breadcrumbs.
- **`/hooks`**: Custom React hooks like `useIsMobile` for handling mobile view.
- **`/styles`**: Global and component-specific styles written in Tailwind CSS.
- **`/context`**: Contains context for managing global state like theme and language preferences.

## Components

### LanguageSwitcher

A dropdown menu allowing users to switch between supported languages (English and Arabic). It updates the language in the URL while keeping the rest of the URL path intact.

### Breadcrumb

Displays the current navigation path, dynamically generated from the URL. It supports RTL (Right-to-Left) and LTR (Left-to-Right) text directions based on the selected language.

### TaxSettingsForm

A form where users can manage VAT settings for the store. It includes form validation and input handling.

### ThemeSwitcher

A button that allows users to toggle between light and dark themes. The user's theme preference is stored in `localStorage` so the theme persists even after a page reload.

### ShadCN UI Components

The project uses **ShadCN UI** components to create a consistent and visually appealing UI. ShadCN provides accessible, reusable, and customizable components like buttons, dropdown menus, and modals. These components are styled using Tailwind CSS for easy integration and responsiveness.

## Technologies Used

- **Next.js**: A React framework for building server-side rendered applications.
- **Tailwind CSS**: A utility-first CSS framework used for styling the page.
- **ShadCN UI**: A library of accessible, customizable UI components.
- **React**: JavaScript library for building user interfaces.
- **Lucide React Icons**: For rendering icons in the UI.
- **React Context API**: For global state management (e.g., locale, language, and theme preferences).
- **React Hooks**: For managing state and lifecycle methods.

## Light and Dark Mode Implementation

The page supports light and dark themes using the following:

- **Theme Toggle**: A button allows users to toggle between light and dark modes.
- **Persistence**: The user's selected theme is saved in `localStorage` to persist the theme choice across sessions.
- **Tailwind CSS**: Utility classes are used to style the page, with custom themes (light and dark) managed via CSS variables.

To enable light and dark modes, make sure to include the theme switcher component in your application and manage the state with the Context API or similar state management solution.

## Installation of Tailwind CSS with Dark Mode

Make sure Tailwind CSS is configured to support dark mode. Add the following configuration to your `tailwind.config.js` file:

```javascript
module.exports = {
  darkMode: "class", // Enable dark mode based on the class
  theme: {
    extend: {},
  },
  plugins: [],
};
```

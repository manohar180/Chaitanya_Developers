# Chaitanya Developers - Red Sandalwood Projects

A modern React.js website for Chaitanya Developers, showcasing their Red Sandalwood projects and plot management system.

## Features

- Modern, responsive design using Chakra UI
- Multiple pages with smooth transitions
- Project showcase with detailed information
- Interactive plot management system
- Contact form with form validation
- LocalStorage integration for data persistence
- Beautiful animations using Framer Motion

## Pages

1. **Home Page**
   - Modern hero section
   - Services overview
   - Call-to-action buttons

2. **Projects Page**
   - Showcase of "Siddavanam" and "Green Valley" projects
   - Project details and statistics
   - Quick access to plot management

3. **Manage Plots Page**
   - Interactive plot grid
   - Color-coded plot status
   - Search and filter functionality
   - Plot details modal
   - Add/Edit/Delete plot information

4. **About Page**
   - Company vision
   - Red Sandalwood information
   - Company values

5. **Contact Page**
   - Contact form
   - Company information
   - Social media links

## Technical Stack

- React.js (Functional Components + Hooks)
- React Router v6
- Chakra UI
- Framer Motion
- LocalStorage API

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProjectCard.jsx
│   ├── PlotGrid.jsx
│   └── PlotModal.jsx
├── pages/
│   ├── Home.jsx
│   ├── Projects.jsx
│   ├── ManagePlots.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── utils/
│   └── localStorageUtils.js
├── theme.js
└── App.js
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 
# Rohit Mukkala Portfolio

A modern, interactive portfolio built with React, showcasing skills, projects, experience, and contact information.

## Features

- **Animated Background:** Video background with fallback image (`src/background/Background.js`)
- **Navigation:** Responsive navigation bar (`src/nav/Nav.js`)
- **About Section:** Personal, education, and experience details (`src/about/About.js`, `src/about/AboutMenu.js`)
- **Skills Section:** Front-end and back-end skills with visual levels (`src/skills/Skills.js`, `src/skills/SkillsMenu.js`)
- **Projects Section:** Portfolio of projects with images, descriptions, and links (`src/projects/Projects.js`, `src/projects/ProjectsMenu.js`)
- **Contact Section:** Email contact form with validation and sanitization (`src/contact/Contact.js`, `src/contact/ContactMenu.js`)
- **Player Stats:** Fun personal stats display (`src/playerStats/PlayerStats.js`)
- **Responsive Design:** Optimized for desktop and mobile (`src/styles/`)

## Project Structure

```
public/
  index.html
  favicon.ico
src/
  App.js
  index.js
  background/
  nav/
  about/
  skills/
  projects/
  contact/
  playerStats/
  avatar/
  assets/
  styles/
.env.local
package.json
.gitignore
README.md
```

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the development server:**

   ```sh
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production:**
   ```sh
   npm run build
   ```

## Environment Variables

For contact form functionality, set these in `.env.local`:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_USER_ID=your_user_id
```

## Customization

- **Skills:** Edit `src/skills/skillsData.js`
- **Projects:** Edit `src/projects/projectsData.js`
- **About:** Edit `src/about/subheadingsData.js`
- **Assets:** Add images/videos to `src/assets`

## License

This project is for personal portfolio use. See LICENSE for details.

---

Built with [Create React App](https://github.com/facebook/create-react-app).

# Feedback App

## Project Description

This project is a feedback app developed as part of Traversy Media's React course. The app allows users to post and edit reviews on a fictitious service, providing a practical example of building dynamic, interactive web applications with React.

## Learning Objectives

This project serves as a hands-on learning experience for me to deepen my understanding of:

- React fundamentals and component-based architecture
- State management in React
- Modern front-end development techniques using Vite and Tailwind CSS

## Key Features

- **Post Reviews:** Users can submit reviews for a fictitious service.
- **Edit Reviews:** Users can edit their previously submitted reviews.
- **Dynamic UI:** The app features a dynamic, interactive user interface built with React.

## Technologies Used

- **Vite:** A fast build tool and development server, replacing create-react-app.
- **React:** JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for styling the app.

## Project Structure

```plaintext
feedback-app/
├── public/
├── src/
│   ├── components/
│   │   ├── FeebackForm.jsx
│   │   ├── FeedbackItem.jsx
│   │   ├── FeedbackList.jsx
│   │   ├── FeedbackStats.jsx
│   │   └── RatingSelect.jsx
│   ├── shared/
│   │   └── Card.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .esllintrc.cjs
├── .gitignore
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## Setup and Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/amirat9/feedback-app.git
   cd feedback-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the app:**

   ```bash
    npm run dev
   ```

## Usage

1. **Start the Development Server:**
   After running `npm run dev`, open your browser and navigate to `http://localhost:3000` to view the app.

2. **Post a Review:**

   - Use the form on the page to submit a new review.
   - Enter your feedback in the input field and submit.

3. **Edit a Review:**

   - Each review will have an edit button.
   - Click the edit button to modify your existing review.
   - Make your changes in the input field and save the updated review.

4. **Delete a Review:**
   - If applicable, a delete option will be available next to each review.
   - Click the delete button to remove a review from the list.

## Credits

This project is inspired by Traversy Media's React course. Special thanks to Brad Traversy for his excellent tutorials and resources.

Additionally, I replaced the create-react-app setup with Vite for faster build times and used Tailwind CSS for styling the application. These tools have significantly enhanced my development workflow and learning experience.

For more information on the tools and resources used in this project, check out:

- [Traversy Media's React Course](https://www.traversymedia.com)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.

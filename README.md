# LinkedIn AI Reply Chrome Extension

This project is a Chrome extension that runs on LinkedIn and assists users in generating replies, This is a demo extension, developed using React , TypeScript and Tailwind CSS, integrated with Vite for fast development and hot module replacement (HMR).

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

```js
git clone https://github.com/your-username/ChatGPT-Writer-Assign.git
```

2. Install dependencies:

```js
npm install
```

3. Start the development server:

```js
npm run dev
```

4. Open your browser and navigate to http://localhost:5173 to view the application.

# Features

```js
1.  Show the AI icon when the user focuses on the LinkedIn message input field. The icon will disappear when the input field is no longer focused.

```

```js
2.  Display a center-aligned modal when clicking on the icon. Clicking anywhere outside this modal it will close it.
```

```js
3.  The user can enter any command in the modal's input field.
```

```js
4.  Clicking on the “Generate” button it will just display dummy response: "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask." The “Regenerate” button should be non-functional.
```

```js
5.  When the user clicks on the insert button, the generated static text will be inserted into the message input field.
```

```js
6.  When user click on send button it will be reflect on chat box.
```

[![asciicast](https://asciinema.org/a/113463.png)](https://www.loom.com/share/8a57c2139fa84f7e8515284a6b03cd7d?sid=e9022249-99c0-4d7c-ab2c-2d081043189d)

#Demo Video

```js
https://www.loom.com/share/8a57c2139fa84f7e8515284a6b03cd7d?sid=e9022249-99c0-4d7c-ab2c-2d081043189d
```

- Update the parserOptions property in ESLint configuration to include TypeScript project settings.
- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

#Contributing

Contributions to this project are welcome! If you'd like to contribute, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature)
Make your changes.
Commit your changes (git commit -am 'Add new feature')
Push to the branch (git push origin feature)
Create a new Pull Request.

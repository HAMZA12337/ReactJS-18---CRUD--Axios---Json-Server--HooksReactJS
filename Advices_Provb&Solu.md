# ReactJS Framework 18 - Architecture - CRUD Example App -Axios-- Json-Server -Hooks

### First Prob that I faced why components render twice when we use Hooks{UseEffects}

Remove <React.StrictMode> from index.js This code will be :

    root.render(
    //<React.StrictMode>
        <App />
    // </React.StrictMode>
    );
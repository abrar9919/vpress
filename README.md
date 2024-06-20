- Application to show posts from dummyapi. You can also like posts.
- Built with Tanstack query, MUI and React Intersection Observer.
- Tanstack -> To make it easy to fetch data
- MUI -> For components and to make it easy to use CSS in JS
- React Intersection Observer -> To enable endless scrolling



-------
In order to run this codebase, please create a .env file with the following variables
VITE_API_KEY=ENTER_API_KEY_HERE
VITE_API_URL=https://dummyapi.io/data/v1/post
VITE_API_LIMIT=50

Run the following commands in the terminal.
npm ci
npm run dev
-------




Improvements
- If I had some more time, I'd write some more unit tests, particularly for utility functions such as getNextPageParam() as that is slightly harder to test.
- Add more functionality such as filter posts by users, date, tags, etc.

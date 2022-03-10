# Agrigistics Technical Test - Dominica

This assignment took around 5 hours. 
Two areas I sunk the most time into:
1. Getting the filters 100% correct. I had some trouble when properties had a value of `null`. I added an additional check, to make sure the property has a value.
2. The mobile and desktop views are quite different, and I didn't want to have unneccessary HTML code rendering when it was not needed. I added a screen size listener to conditionally render the desktop and mobile HTML. I try to avoid rendering content multiple times, and would suggest a different layout that would work across all screensizes more naturally.

Areas I would like to improve:
1. If `Farms.vue` has hundreds of different blocks to render, looping through it twice is likely to produce perfomance issues. I'd like to improve this to only render the content once.

Overall, this was an enjoyable test. The design was a challenge, but I enjoyed working with JS to filter content on client side - normally I filter using PHP on server side with requests.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```
This opens the app on http://localhost:3000 to view it in the browser.
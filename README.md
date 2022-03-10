# Offerzen Technical Test - Dominica

This assignment took around 5 hours. 
Two areas I sunk the most time into:
1. Formatting the dates to return either a string or the formatted date. I used the moment library to assist with this.
2. Spoofing the archive button. This one stumped me because I was thinking about it like I would in a real world project, where the updated value would be sent to a server and updated on a database. I eventually opted to temporarily update the array to spoof this functionality. But in a real project, I would use something like axios to post the updated value to a database.

Areas I would like to improve:
1. I would like to extract the `formatDate` and `formatSalary` functions to be reuseable throughout the project, as they are generic enough.

Overall, this was an enjoyable test, besides getting stuck on the archive functionality 😅 I enjoyed working with JS to filter content on client side - normally I filter using PHP on server side with requests.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```
This opens the app on http://localhost:3000 to view it in the browser.
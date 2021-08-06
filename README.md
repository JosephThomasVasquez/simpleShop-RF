# Shopping List App

React &amp; Firebase Shopping List App
## Try it out here: [Live Project](https://simpleshop-rf.web.app/)

---

![Image of Recipe List View](https://github.com/JosephThomasVasquez/Portfolio-2020/blob/master/images/SimpleShop1.jpg)
![Image of Shopping List View](https://github.com/JosephThomasVasquez/Portfolio-2020/blob/master/images/SimpleShop2.jpg)

## Features

- New users can Sign Up with email & password
- Users can login with email & password, or `Google Account`
- User's can create a shopping list that is persistent across all devices.
- Users can `create/update/delete` items in the shopping list which is updated on Firestore in realtime with visual feedback.
- Anyone can Search Recipes from the Home view/page via Edmam API. _`Note: Limit is 10 hits per minute.`_

  - The "Load More" button will fetch 10 additional recipes each time and will display and update the state.
  - Viewing a recipe displays the relevant recipe data.

  - _`Note: The Edmam API doesn't store the recipe directions data so I have added an external link inside the recipe details view/page which will direct the user to the original page with directions.`_

- Responsive design for mobile, tablets, desktops, and larger displays

---

## Packages

- firebase | **8.3.3**
- react | **17.0.2**
- react-dom | **17.0.2**
- react-router-dom | **5.2.0**
- react-bootstrap | **1.5.2**
- bootstrap | **4.6.0**
- node-sass | **5.0.0**

# Real Estate Website:
## About project:
Programming Hero - my assignment 9. Real Estate website. Focused on firebase login system (auth with react, protected route, loading etc)

  - title: **SweetHome**
  - category: Residential Estate
  - technology: react 18, tailwindcss, firebase 10, react router
  - npm packages: 
    - animate.css (for animation)
    - react-leaflet (for map)
    - swiper-js (for slider)
    - react-helmet (for dynamic page title)

## Features:
  - authentication - Signup, login, logout
  - login using - email + password / google / github
  - verify password using regex (must contain 1 upper, 1 lower, >= 6 chars)
  - protected routes - only logged in user can access some pages
  - dynamic page title
  - user can update profile (name, image url) 
  - show page loader while loading data
  - load & show estate details on another route

## Case study:
This project took a great time to complete. 
Case 1:- I have fallen on creating user with email and pass. Because, when I call createUser, the authState triggered before even update profile. So, I checked if user has a name in authState func; if so, i returned. Thus I could update user's profile and maually set user.  
Case 2:- update User doesn't trigger onAuthStateChanged. So, after updating user profile; I have updated user state manually to show latest info. `setUser( {...user, displayName, photoURL} )`

## Important Links:
  - assignment source (phero): https://github.com/ProgrammingHero1/B9A9-B9--Real-estate 
  - my repo (on phero): https://github.com/programming-hero-web-course-4/b9a9-real-estate-rahatfaruk 
  - live website (on firebase): https://ph-assignment-2fe77.web.app/ 


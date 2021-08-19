# Assignment - ReactJS app.

Name: Sean Crowley

## Overview.

...... State the app concept and objectives. If it's the Movies Fan app extension, only state the additional objectives .........

My addtional objectives for the Movies Fan app was to add a TV section to find popular shows and their details aswell as a person section to see their details and credits. I also wanted to extend the favorites page to include people and tv shows and add a search page for movies.

...... A bullet-point list of user features. If it's the Movies Fan app extension, only list new/modified features...... 
 
 + Discover Tv page
 + Tv Details page
 + Person Details page
 + Search for movie page
 + Display cast and crew for a movie / tv show
 + Display Recomended show / moive
 + Display Tv/Movie credits for a person
 + Login / Signup feature with protected routes using Firebase
 + Add favorite tv and people
 + Pagination on the TV and Home page

## Setup requirements.

...... A brief explanation (to a third party) of any non-standard setup steps necessary to run your app/client locally (after cloning the repo) ........

To run the app you will need to connect to firebase in order to access the protected routes. You will also need an API key from The Movie Database website. Create a .env file in the projects directory and fill in the following values with your api keys from firebase and The Movie Database.

    REACT_APP_TMDB_KEY=
    REACT_APP_FIREBASE_API_KEY=
    REACT_APP_FIREBASE_AUTH_DOMAIN=
    REACT_APP_FIREBASE_DATABASE_URL=
    REACT_APP_FIREBASE_PROJECT_ID=
    REACT_APP_FIREBASE_STORAGE_BUCKET=
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
    REACT_APP_FIREBASE_APP_ID=

## API Data Model.

..... [For non-Movies Fan app] Insert a diagram of the API's data model (see example below) AND/OR a sample(s) of the JSON documents returned by its endpoints ........

![][model]

......[For the Movies Fan app] Specify the additional TMDB endpoints used and show sample responses, in JSON .........

I used the following api endpoints:
Get Moive Credits - returns cast and crew for a movie.

    "id":	2
    "cast":	[…] - array of cast
    "crew":	[…] - array of crew

Get Popular Tv - returns popular shows

    "page": 1,
    "results": […] array of tv shows
    "total_pages": 500,
    "total_results": 10000

Get Tv Images - returns posters/logos for a tv show



    "backdrops": [ ],
    "id": 50,
    "logos": [ ],
    "posters": [ ]


get Tv Details - returns info about a specific show



    "backdrop_path": "/3niEJKVXKKG6Ln1GXmmwxZ0MkpG.jpg",
    "created_by": [
        {
            "id": 19303,
            "credit_id": "52532e3219c29579400013ab",
            "name": "Kevin Smith",
            "gender": 2,
            "profile_path": "/oBIoLZ0YiJugBH83woeRMs2YlO8.jpg"
        },
        {
            "id": 20503,
            "credit_id": "52532e3219c29579400013a5",
            "name": "Scott Mosier",
            "gender": 2,
            "profile_path": "/kTp9aQtbonYPy4LnfnuXP7Slbs0.jpg"
        },
        {
            "id": 57407,
            "credit_id": "52532e3219c295794000136f",
            "name": "David Mandel",
            "gender": 2,
            "profile_path": null
        }
    ],
    "episode_run_time": [
        30,
        22
    ],
    "first_air_date": "2001-02-20",
    "genres": [
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        }
    ],
    "homepage": "",
    "id": 2,
    "in_production": false,
    "languages": [
        "en"
    ],
    "last_air_date": "2001-02-20",
    "last_episode_to_air": {
        "air_date": "2001-02-20",
        "episode_number": 6,
        "id": 1130478,
        "name": "The Last Episode Ever",
        "overview": "Randal and Dante visit a comic con, where people encourage them to be more true to the movie. Back at the store, Dante prepares for a date with Caitlin Bree. A fair springs up across the street and Jay and Silent Bob can't keep themselves from rushing in every 2 minutes to bring news while Randal and Dante must man the Quick Stop all night.",
        "production_code": "",
        "season_number": 1,
        "still_path": "/xhbjqZWbMaHKGdvm9M46JN0crRV.jpg",
        "vote_average": 7.0,
        "vote_count": 1
    },
    "name": "Clerks: The Animated Series",
    "next_episode_to_air": null,
    "networks": [
        {
            "name": "ABC",
            "id": 2,
            "logo_path": "/ndAvF4JLsliGreX87jAc9GdjmJY.png",
            "origin_country": "US"
        },
        {
            "name": "Comedy Central",
            "id": 47,
            "logo_path": "/6ooPjtXufjsoskdJqj6pxuvHEno.png",
            "origin_country": "US"
        },
        {
            "name": "Adult Swim",
            "id": 80,
            "logo_path": "/9AKyspxVzywuaMuZ1Bvilu8sXly.png",
            "origin_country": "US"
        }
    ],
    "number_of_episodes": 6,
    "number_of_seasons": 1,
    "origin_country": [
        "US"
    ],
    "original_language": "en",
    "original_name": "Clerks: The Animated Series",
    "overview": "Clerks is an American animated sitcom based on Kevin Smith's 1994 comedy of the same name. It was developed for television by Smith, Smith's producing partner Scott Mosier and former Seinfeld writer David Mandel with character designs by Stephen Silver.",
    "popularity": 9.865,
    "poster_path": "/xunXvzFlkf1GGgMkCySA9CCFumB.jpg",
    "production_companies": [
        {
            "id": 1558,
            "logo_path": "/wwaKUcOENHix2jxLfFBfNkCtOEQ.png",
            "name": "Touchstone Television",
            "origin_country": "US"
        },
        {
            "id": 16934,
            "logo_path": "/7HEUbdTlFQWf4SKidP8S29yFgoW.png",
            "name": "View Askew Productions",
            "origin_country": "US"
        },
        {
            "id": 90044,
            "logo_path": null,
            "name": "Woltz International Pictures Corporation",
            "origin_country": ""
        },
        {
            "id": 14,
            "logo_path": "/m6AHu84oZQxvq7n1rsvMNJIAsMu.png",
            "name": "Miramax",
            "origin_country": "US"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],
    "seasons": [
        {
            "air_date": null,
            "episode_count": 7,
            "id": 2328128,
            "name": "Specials",
            "overview": "",
            "poster_path": null,
            "season_number": 0
        },
        {
            "air_date": "2001-02-20",
            "episode_count": 6,
            "id": 2328127,
            "name": "Season 1",
            "overview": "",
            "poster_path": null,
            "season_number": 1
        }
    ],
    "spoken_languages": [
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        }
    ],
    "status": "Ended",
    "tagline": "",
    "type": "Scripted",
    "vote_average": 6.8,
    "vote_count": 61


Get Person Details - returns info about a person



    "adult": false,
    "also_known_as": [
        "Mark Hamil",
        "Mark Richard Hamill",
        "Марк Хэмилл",
        "Μαρκ Χάμιλ",
        "マーク・ハミル",
        "마크 해밀",
        "Patrick Williams",
        "William M. Patrick"
    ],
    "biography": "Mark Richard Hamill (born September 25, 1951) is an American actor, voice artist, producer, director, and writer. Hamill is best known for his role as Luke Skywalker in the original Star Wars trilogy and also well known for voice-acting characters such as the Joker in various animated series, animated films and video games, beginning with Batman: The Animated Series, the Skeleton king in Super Robot Monkey Team Hyperforce Go!, Fire Lord Ozai in Avatar: The Last Airbender, Master Eraqus in Kingdom Hearts: Birth by Sleep, Skips in Regular Show, and Senator Stampington on Metalocalypse.",
    "birthday": "1951-09-25",
    "deathday": null,
    "gender": 2,
    "homepage": null,
    "id": 2,
    "imdb_id": "nm0000434",
    "known_for_department": "Acting",
    "name": "Mark Hamill",
    "place_of_birth": "Concord, California, USA",
    "popularity": 9.61,
    "profile_path": "/zMQ93JTLW8KxusKhOlHFZhih3YQ.jpg"

Get Person Images - returns images of a person

    "id": 2,
    "profiles": [
        {
            "aspect_ratio": 0.667,
            "height": 1919,
            "iso_639_1": null,
            "file_path": "/zMQ93JTLW8KxusKhOlHFZhih3YQ.jpg",
            "vote_average": 5.454,
            "vote_count": 3,
            "width": 1280
        },
        {
            "aspect_ratio": 0.667,
            "height": 2178,
            "iso_639_1": null,
            "file_path": "/9Wws35pCsT0KoZpiV4Gk5nbn9ZD.jpg",
            "vote_average": 5.392,
            "vote_count": 8,
            "width": 1452
        }
    ]

Get Recommended Movies - Returns a list of recommended movies for a particular moive

    "page": 1,
    "results": [...],
    "total_pages": 2,
    "total_results": 40

Get Shows Cast and crew - Returns a list of cast and crew members for a show

    "cast": [..],
    "crew": [..],
    "id": 2

Get Recommended Shows - Returns a list of recommended shows for a particular show

    "page": 1,
    "results": [..],
    "total_pages": 2,
    "total_results": 26

Search Moive - Uses a query string to search for movies

    "page": 1,
    "results": [],
    "total_pages": 169,
    "total_results": 3366

Get Persons Moive Credits - Returns a list of movies where the person was involved

    "cast": [..],
    "crew": [..],
    "id": 2
    
Get Persons Tv Credits - Returns a list of shows where the person was involved

    "cast": [..],
    "crew": [..],
    "id": 2

## App Design.

### Component catalogue.

....... Insert a screenshot from the Storybook UI showing your component catalogue. [For the Movies app, hi-light stories relating to new/modified components - see the example screenshot below] .......

My Story book view

![storybook-movies-app](https://user-images.githubusercontent.com/59771293/130106031-b8288904-bd0f-4c05-afa3-96be26ee301c.png)

### UI Design.

...... Insert screenshots of the app's views, with appropriate captions (see example below). (For the Movies Fan App, only show the new/modified views) ........

![Home Page](https://user-images.githubusercontent.com/59771293/130093435-c844046e-30e5-42f0-963f-8ef352a5cdc2.png)
>Home Page with pagination buttons and Login Button in Site Header

![Home Page pagination](https://user-images.githubusercontent.com/59771293/130095524-8b9ab44a-a205-4fb7-b652-dbb91aa5529f.png)


![Movie Details Cast](https://user-images.githubusercontent.com/59771293/130094318-cc7490ce-42ac-4c29-a392-32ab2a4bbdf2.png)
>Movie Details page extended with tabs to see a movies Cast, Crew and Recomended Movies

![Movie Details Crew](https://user-images.githubusercontent.com/59771293/130094392-e2341824-529a-44f3-9a44-6cd025ee74b2.png)
![Movie Details Recomended](https://user-images.githubusercontent.com/59771293/130094550-6b8cedf6-6e29-42a2-8469-c5f4aed5f5f8.png)

![Person Details page](https://user-images.githubusercontent.com/59771293/130094952-fd0f06a1-0592-4cc5-b0a6-19556f02242a.png)
>Person details page displays information about a person plus their tv and movie credits

![Person Details tab](https://user-images.githubusercontent.com/59771293/130095306-4a7a4304-dfb6-480b-b294-94386e029c50.png)

![TV page](https://user-images.githubusercontent.com/59771293/130097550-916ad335-3875-40fd-aabd-4715c9edc85d.png)
>Tv page displays popular tv shows. Also has pagination buttons.

![TV page pagination](https://user-images.githubusercontent.com/59771293/130097851-ad2e78cb-c6c1-4849-8ff7-56815c6255c0.png)

![Tv Details](https://user-images.githubusercontent.com/59771293/130098365-6783b07e-b0bb-4c33-b6ce-adbef378ef68.png)
>Tv Details page show inforamtion regarding a particular show. Also shows the shows cast and crew aswell as Recommended Shows

![Tv Details Cast](https://user-images.githubusercontent.com/59771293/130099042-b1c72946-0dc5-4262-9415-5786620316bc.png)
![Tv Details Crew](https://user-images.githubusercontent.com/59771293/130099062-8bc35b22-e577-49ed-b747-c4f214d2fcc7.png)
![Tv Details Recomended](https://user-images.githubusercontent.com/59771293/130099170-fc5a5fbe-23b6-4a10-81ec-649aee8a6d9d.png)


![Login page](https://user-images.githubusercontent.com/59771293/130099343-1d8ca3b4-133c-4fb2-b548-61c75e8b0524.png)
>In order to authenticate with firebase I created a login page. I also created a signup page.

![signup page](https://user-images.githubusercontent.com/59771293/130099749-c79b09ae-e04f-4690-84be-3a060537ded8.png)

![logged in header](https://user-images.githubusercontent.com/59771293/130099973-5ea0f974-8933-417a-8f32-ca4c714474a8.png)
>Once Logged in the users email is displayed alongside a log out button

![Search Page](https://user-images.githubusercontent.com/59771293/130100287-02cd7dd4-9ca7-4684-bfda-734c94b19f55.png)
>The search page is a protected route that allows you to search for a particular moive

![Search Page with query](https://user-images.githubusercontent.com/59771293/130100547-f94bdf3e-4d45-44a1-85d5-849ca88a4d85.png)

![Favorites Page](https://user-images.githubusercontent.com/59771293/130101461-7d33286a-cea7-4b31-a282-9ee76c25669e.png)
![Favorites Page2](https://user-images.githubusercontent.com/59771293/130101476-a9e29d74-0ced-4a2c-8e26-aeda0df50f4e.png)
>Ive extended the favorites page to include Tv shows and people with links to go to their respective details pages. The favorites page is now also a protected route.

![Favorites Page3](https://user-images.githubusercontent.com/59771293/130101859-35bd4c56-1b56-42bb-8bd8-3c69b6f6bbde.png)
>The remove from favorites feature also applies to Tv shows and people



### Routing.

...... Insert a list of the routes supported by your app and state the associated view. If relevant, specify which of the routes require authentication, i.e. protected/private. [For the Movies Fan app, only new routes should be listed.] ......... 

+ GET /tv - displays popular tv shows.
+ GET /tv/:id - displays details for a particular tv show.
+ GET /person/:id/ - detail view of a particular person.
+ GET /search (protected) - displays a page for searching for movies.
+ GET /movies/favorites (protected) - favorites page extended and now a protected route.
+ GET /login - login to firebase backend.
+ GET /signup - signup for firebase authentication

## Independent learning (If relevant).

....... Briefly state any technologies/techniques used in your project codebase that was not covered in the lectures/labs. Provide source code filename (source code excerpts are not required in most cases) references to support your assertions and include references (articles/blogs) ......... 

In the project I used pagination, firebase authentication and search queries.

In order to add pagination to the app I used the guide in the React Query docs at https://react-query.tanstack.com/guides/paginated-queries The component used is call "paginationButtons"

To add the firebase backend authentication I used this video guide https://www.youtube.com/watch?v=PKwu15ldZ7k the code can be found in the contexts folder as authContext. It is primarily used in the login and signup componets aswell as the index.js file

I learned how to implement search queries here https://www.freecodecamp.org/news/react-movie-app-tutorial/ (specifically the part related to searching for a movie)

[model]: ./data.jpg
[view]: ./view.png
[stories]: ./storybook.png

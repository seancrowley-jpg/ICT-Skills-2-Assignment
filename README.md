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

![][stories]

My Story book view

![storybook-movies-app](https://user-images.githubusercontent.com/59771293/129959125-fd3ba151-b27b-4732-9ad6-85c2a4c85d86.png)


### UI Design.

...... Insert screenshots of the app's views, with appropriate captions (see example below). (For the Movies Fan App, only show the new/modified views) ........

![][view]
>Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

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







### Routing.

...... Insert a list of the routes supported by your app and state the associated view. If relevant, specify which of the routes require authentication, i.e. protected/private. [For the Movies Fan app, only new routes should be listed.] ......... 

+ GET /blogs - displays all published blogs.
+ POST /blogs (protected) - add a new blog.
+ GET /blogs/:id - displays a particular blog.
+ GET /blogs/:id/comments (protected) - detail view of a particular blog and its comments.
+ etc.
+ etc.

## Independent learning (If relevant).

....... Briefly state any technologies/techniques used in your project codebase that was not covered in the lectures/labs. Provide source code filename (source code excerpts are not required in most cases) references to support your assertions and include references (articles/blogs) ......... 


[model]: ./data.jpg
[view]: ./view.png
[stories]: ./storybook.png

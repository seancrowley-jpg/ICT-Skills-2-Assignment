import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from "./components/siteHeader";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MoviesContextProvider from "./contexts/moviesContext";
import DiscoverTvPage from "./pages/discoverTvPage";
import TvPage from "./pages/tvDetailsPage";
import PersonPage from "./pages/personDetailsPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader /> {/* New Header  */}
        <MoviesContextProvider>
          <Switch>
            <Route exact path="/reviews/form" component={AddMovieReviewPage} />
            <Route
              exact
              path="/movies/upcoming"
              component={UpcomingMoviesPage}
            />
            <Route path="/reviews/:id" component={MovieReviewPage} />
            <Route
              exact
              path="/movies/favorites"
              component={FavoriteMoviesPage}
            />
            <Route
              exact
              path="/tv"
              component={DiscoverTvPage}
            />
            <Route path="/movies/:id" component={MoviePage} />
            <Route path="/tv/:id" component={TvPage} />
            <Route path="/person/:id" component={PersonPage} />
            <Route exact path="/" component={HomePage} />
            <Redirect from="*" to="/" />
          </Switch>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
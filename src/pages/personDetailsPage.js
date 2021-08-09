import React from "react";
import { withRouter } from "react-router-dom";
import PersonDetails from "../components/personDetails";
import PageTemplate from "../components/templatePersonPage";
import { getPersonDetails} from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const PersonDetailsPage = (props) => {
  const { id } = props.match.params

  const { data: person, error, isLoading, isError } = useQuery(
    ["show", { id: id }],
    getPersonDetails,
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {person ? (
        <>
          <PageTemplate person={person}>
            <PersonDetails person={person}/>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for persons details</p>
      )}
    </>
  );
};

export default withRouter(PersonDetailsPage);
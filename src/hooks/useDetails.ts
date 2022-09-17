import {
  useCreditsQuery,
  useDetailsQuery,
  useRecommendationsQuery,
} from "../store/services/movies";
import { useLayoutEffect } from "react";
import { Credits } from "../interfaces/credits";
import { MovieDetail } from "../interfaces/movieDetail";
import { Recommendations } from "../interfaces/recommendations";

const useDetails = (id: string) => {
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [id]);

  const {
    data: recommendations,
    isLoading: isLoadingRecommendations,
    isUninitialized: isUninitializedRecommendations,
    isError: isErrorRecommendations,
    isSuccess: isSuccessRecommendations,
    isFetching: isFetchingRecommendations,
  } = useRecommendationsQuery(parseInt(id));

  const {
    data: details,
    isLoading: isLoadingDetails,
    isUninitialized: isUninitializedDetails,
    isError: isErrorDetails,
    isSuccess: isSuccessDetails,
    isFetching: isFetchingDetails,
  } = useDetailsQuery(parseInt(id));

  const {
    data: credits,
    isLoading: isLoadingCredits,
    isUninitialized: isUninitializedCredits,
    isError: isErrorCredits,
    isSuccess: isSuccessCredits,
    isFetching: isFetchingCredits,
  } = useCreditsQuery(parseInt(id));

  const isInitialLoading =
    isLoadingRecommendations || isLoadingCredits || isLoadingDetails;

  const isFetching =
    isFetchingRecommendations || isFetchingCredits || isFetchingDetails;

  const isUninitialized =
    isUninitializedRecommendations ||
    isUninitializedCredits ||
    isUninitializedDetails;

  const isLoading = isInitialLoading || isUninitialized || isFetching;

  const isError =
    isErrorRecommendations ||
    isErrorCredits ||
    isErrorDetails ||
    typeof credits === "undefined" ||
    typeof details === "undefined" ||
    typeof recommendations === "undefined";

  const isSuccess =
    isSuccessRecommendations || isSuccessCredits || isSuccessDetails;

  return [
    isLoading,
    isError,
    isSuccess,
    recommendations as Recommendations,
    details as MovieDetail,
    credits as Credits,
  ] as const;
};

export default useDetails;

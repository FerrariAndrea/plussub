import query from './query.gql';
import { SubtitleSearchForMoviesQuery, SubtitleSearchForMoviesQueryVariables } from './__gen_gql';
export * from './__gen_gql'

export const searchQuery = async (variables: SubtitleSearchForMoviesQueryVariables): Promise<SubtitleSearchForMoviesQuery> => {
  return {
    subtitleSearch: {
        data: []
    }
}
};

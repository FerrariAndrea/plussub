import { SubtitleSearchForSeriesQuery, SubtitleSearchForSeriesQueryVariables } from './__gen_gql';

export * from './__gen_gql'

export const searchQuery = async (variables: SubtitleSearchForSeriesQueryVariables): Promise<SubtitleSearchForSeriesQuery> => {
  return {
    subtitleSearch: {
        data: []
    },
    seasons: {
        seasons: []
    }
}
};

import mutation from './mutation.gql';

export interface Payload {
  source: 'file'  | 'search-for-movie' | 'search-for-series' | 'legacy-search';
  language: string;
}

export const trackMutation = async ({source, language}: Payload): Promise<unknown> => {
  return {
    mutation,
    variables: {
      origin: window.location.origin,
      source,
      language
    }
  }
};

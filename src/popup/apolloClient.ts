import 'monkeyPatchApollo'
import {ApolloClient, InMemoryCache,NormalizedCacheObject} from "@apollo/client/core";


class ApolloClientWrapper{
    private client:ApolloClient<NormalizedCacheObject>|null;

    constructor(){
      try{
        this.client= new ApolloClient({
          uri: 'https://gqlos.plus-sub.com',
          cache: new InMemoryCache()
        });
      }catch(err){
        console.warn("Can't create ApolloClient",err.message)
        this.client=null
      }
    }

    public getClient(): ApolloClient<NormalizedCacheObject>|null {
      return this.client;
    }
}

export const client = new ApolloClientWrapper()

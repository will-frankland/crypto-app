import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': '3f27f651bdmsh22b944e7767ab77p13eb38jsn7a99c6ec1d66',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news'

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
    })
  })
});

export const {
  useGetCryptoNewsQuery
} = cryptoNewsApi;
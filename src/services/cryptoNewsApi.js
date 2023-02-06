import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  'X-RapidAPI-Key': '3f27f651bdmsh22b944e7767ab77p13eb38jsn7a99c6ec1d66',
  'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
};

const baseUrl = 'https://news-api14.p.rapidapi.com/top-headlines'

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
    })
  })
});

export const {
  useGetCryptoNewsQuery
} = cryptoNewsApi;
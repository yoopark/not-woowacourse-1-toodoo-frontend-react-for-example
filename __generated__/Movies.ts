/* eslint-disable */

/* tslint:disable */

/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
import {
  MoviesControllerFindOneData,
  MoviesControllerSearchData,
  MoviesControllerSearchParams,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Movies<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 3.1. Movies
   * @name MoviesControllerSearch
   * @summary 영화 검색
   * @request GET:/movies/search
   */
  moviesControllerSearch = (
    query: MoviesControllerSearchParams,
    params: RequestParams = {},
  ) =>
    this.request<MoviesControllerSearchData, void>({
      path: `/movies/search`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags 3.1. Movies
   * @name MoviesControllerFindOne
   * @summary 영화 상세 조회
   * @request GET:/movies/detail/{id}
   */
  moviesControllerFindOne = (id: number, params: RequestParams = {}) =>
    this.request<MoviesControllerFindOneData, void>({
      path: `/movies/detail/${id}`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}

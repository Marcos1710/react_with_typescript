import { action } from "typesafe-actions";
import { RepositoriesTypes, Repository } from "./types";

export const LoadRequest = () => action(RepositoriesTypes.LOAD_REQUEST);
export const LoadSuccess = (data: Repository[]) =>
  action(RepositoriesTypes.LOAD_SUCCESS, { data });
export const LoadFailure = () => action(RepositoriesTypes.LOAD_FAILURE);

import { ActionType } from "../action-types";

export interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

export interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[]
}

export interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string
}

export type Action = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction

// In the upcoming lecture, we will be adding our searchRepositories action. You will likely see a TS error in the catch block that says Object is of type 'unknown'

// There are two ways that you can resolve this for now:

// Option #1

//     } catch (err: any) {
// Option #2

// ...
 
//     } catch (err) {
//       if (err instanceof Error) {
//         dispatch({
//           type: ActionType.SEARCH_REPOSITORIES_ERROR,
//           payload: err.message,
//         });
//       }
//     }
// ...
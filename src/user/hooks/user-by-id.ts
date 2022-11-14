import { useState, useEffect } from "react";
import { ApiResponse, getDataFromAPI } from "../../utils/api";
import { User } from "../interface/user";

export default function useUserByIdState(id: number | undefined) {
  const [state, setState] = useState<ApiResponse<User | undefined>>({
    loading: true,
    data: undefined,
    error: undefined,
    refresh: () => {},
  });
  useEffect(() => {
    (async () => {
      try {
        if (id) {
          const data = await getDataFromAPI<User>(`users/${id}`);
          setState({ ...state, loading: false, data, error: undefined });
        } else {
          setState({
            ...state,
            loading: false,
            data: undefined,
            error: undefined,
          });
        }
      } catch (error) {
        setState({ ...state, loading: false, data: undefined, error });
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return state;
}

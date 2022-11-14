import { useEffect, useState } from "react";
import { ApiResponse, getDataFromAPI } from "../../utils/api";
import { User } from "../interface/user";

export default function useUserList() {
  const [state, setState] = useState<ApiResponse<User[]>>({
    loading: true,
    data: [],
    error: undefined,
    refresh: () => {
      refreshState();
    },
  });

  const refreshState = async () => {
    try {
      const data = await getDataFromAPI<User[]>("users");
      setState({ ...state, loading: false, data, error: undefined });
    } catch (error) {
      setState({ ...state, loading: false, data: [], error });
    }
  };

  useEffect(() => {
    refreshState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
}

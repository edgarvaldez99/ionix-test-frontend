import { useEffect, useState } from 'react';
import { useRefreshContext } from '../../contexts/refresh-context';
import { ApiResponse, getDataFromAPI } from '../../utils/api';
import { User } from '../interface/user';

export default function useUserListState() {
  const { updated } = useRefreshContext();
  const [state, setState] = useState<ApiResponse<User[]>>({
    loading: true,
    data: [],
    error: undefined,
  });
  // useEffect(() => {
  //   setUpdated(false);
  //   setOpenAlert(false);
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    (async () => {
      try {
        const data = await getDataFromAPI<User[]>('users');
        setState({ loading: false, data, error: undefined });
      } catch (error) {
        setState({ loading: false, data: [], error });
        console.log('error: ', error);
      }
    })();
  }, [updated]);

  return state;
}

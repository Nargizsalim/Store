import { useSelector } from 'react-redux';

export function useAuth() {
    const { email, token, id, displayName } = useSelector(state => state.user);
    return {
        isAuth: !!email,
        email,
        displayName,
        token,
        id
    }
}
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useUnProtect = (): void => {
    const history = useHistory();

    useEffect((): void => {
        const token = window.localStorage.getItem("token");
        if (token) {
            history.push("/");
        }
    }, [history]);
};
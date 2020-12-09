import { useState } from "react";

const useForm = (initialState: any): any => {
    const [form, setForm] = useState(initialState);

    const onChange = (name: any, value: any): void => {
        const newForm = { ...form, [name]: value }
        setForm(newForm)
    }

    const resetState = () => {
        setForm(initialState)
    };

    return { form, onChange, resetState };
};

export default useForm;
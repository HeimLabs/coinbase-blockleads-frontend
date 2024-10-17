import { useMutation } from "@tanstack/react-query";
import { submitForm } from "../api";
import { toast } from "react-toastify";

export const useSubmitForm = (name: string, email: string, address: string) => {

    const mutation = useMutation({
        mutationFn: async () => submitForm({ name, email, address }),
    });

    const _submitForm = () => {
        const _promise = mutation.mutateAsync();
        toast.promise(_promise, {
            pending: "Submitting...",
            success: "Submission successful!",
            error: "Submission failed, please try again!"
        })
    }

    return {
        submitForm: _submitForm,
        ...mutation
    }
}
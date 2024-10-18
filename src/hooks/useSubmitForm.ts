import { useMutation } from "@tanstack/react-query";
import { submitForm } from "../api";
import { toast } from "react-toastify";
import { useState } from "react";

export const useSubmitForm = (name: string, email: string, address: string) => {
    const [transactionLink, setTransactionLink] = useState<string>();

    const mutation = useMutation({
        mutationFn: async () => submitForm({ name, email, address }),
        onSuccess: (data) => setTransactionLink(data.data.transactionLink)
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
        transactionLink,
        ...mutation
    }
}
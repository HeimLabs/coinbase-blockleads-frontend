export type User = {
    name: string;
    address: string
}

export type SubmitRequest = User

export type SubmitResponse = {
    transactionLink: string
}

export interface IReviews {
    productName: string;
    userId: number;
    firstName: string;
    lastName: string;
    rating: number;
    review: string;
    approved: boolean;
    createdAt: Date
}

export interface IReviewResponse {
    count: number
    sort: IReviews[]
    rating: number
}

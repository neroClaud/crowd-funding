export interface Project {
    id?: number;
    title: string;
    description: string;
    goal: number;
    currentAmount: number;
    imagePath: string;
    dateOfPublication?: Date;
}
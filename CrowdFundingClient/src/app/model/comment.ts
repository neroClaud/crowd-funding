import { Project } from "./project";

export interface Comment{
    id ?: number;
    nick : string;
    text : string;
    project : Project;
    reference_comment : Comment;
}
import { AccessStatus } from "./AccessStatus";
import { Survey } from "./Survey";

export interface Access {
    id: string;
    survey: Survey;
    accessStatus: AccessStatus;
}
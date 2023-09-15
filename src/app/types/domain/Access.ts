import { AccessStatus } from "./AccessStatus";
import { Survey } from "./Survey";

export interface Access {
    id: string;
    survey: Survey;
    status: AccessStatus;
    expires_at: Date;
    created_at: Date;
}
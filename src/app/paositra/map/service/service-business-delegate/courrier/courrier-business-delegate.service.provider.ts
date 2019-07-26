import { CourrierBusinessDelegateServiceACI } from "./courrier-business-delegate.service.aci";
import { CourrierBusinessDelegateService } from "./courrier-business-delegate.service";

export let CourrierBusinessDelegateServiceProvider = [
    { provide: CourrierBusinessDelegateServiceACI, useClass: CourrierBusinessDelegateService }
];

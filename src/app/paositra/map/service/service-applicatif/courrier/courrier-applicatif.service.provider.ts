import { CourrierApplicatifServiceACI } from "./courrier-applicatif.service.aci";
import { CourrierApplicatifService } from "./courrier-applicatif.service";

export let CourrierApplicatifServiceProvider = [
    { provide: CourrierApplicatifServiceACI, useClass: CourrierApplicatifService }
]
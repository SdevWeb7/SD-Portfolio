import {createSafeActionClient} from "next-safe-action";

export const safeAction = createSafeActionClient({
    handleReturnedServerError(e) {
        return "Il y a une erreur serveur";
    },
});

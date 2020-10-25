import {BNoExcessA} from "./BNoExcessA";

export type BNoExtraPropertiesThanA<A, B> = A & BNoExcessA<A, B>

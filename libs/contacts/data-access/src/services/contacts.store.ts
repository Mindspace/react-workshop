import { StoreApi } from "zustand/vanilla";
import { ContactsAPI, ContactsState, ContactsViewModel } from "./contacts.model";
import { InjectionToken, initStoreState } from "@mindspace/di";
import { ContactsService } from "./contacts.service";


export type ContactStore = StoreApi<ContactsViewModel>;
export const ContactsStoreToken = new InjectionToken<Store>('ContactsStore');



// Helper function to create the store
export function buildContactsStore(service: ContactsService): Store {

}   

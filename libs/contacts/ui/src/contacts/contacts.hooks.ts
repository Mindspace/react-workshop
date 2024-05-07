import { Contact, ContactsService } from "@workshop/data-access";
import { useEffect, useState } from "react";
import { NavigateFunction, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { inject } from '@mindspace/di';

/**
 * Define tuple types
 */
export type ContactHookResults = [Contact[], (criteria: string) => void];


/**
 * Custom React Hook useful to search and load Contacts
 */
export function useContactsHook(): ContactHookResults {
    const [service] = useState(() => inject<ContactsService>(ContactsService));
    const [criteria, setCriteria] = useState<string>('');
    const [people, setPeople] = useState<Contact[]>([]);
    
    useEffect(() => {
        service.searchBy(criteria).then(setPeople);
    }, [criteria, service, setPeople]);

    return [people, setCriteria];
}

	
export type ContactDetailsResult = [Contact, NavigateFunction];

const blankContact: Contact = {
    id: "",
    name: "",
    photo: "",
    position: "",
    email: ""
};

/**
 * Custom React Hook useful to load Contact details
 */
export function useContactDetailHook(): ContactDetailsResult {
    const { id } = useParams<{ id?: string }>(); // Add a question mark to make the id parameter optional
    const history = useNavigate();
    const [service] = useState(() => inject<ContactsService>(ContactsService));
    const [contact, setContact] = useState<Contact>();
    
    useEffect(() => {
        service.getContactById(id ?? "").then((result) => setContact(result ?? blankContact)); 
    }, [id, service]);
    
    return [contact, history] as ContactDetailsResult;
}
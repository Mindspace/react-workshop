import { makeInjector, DependencyInjector } from '@mindspace/di';
import { ContactsService, API_ENDPOINT, API_KEY } from './contacts.service';

/**
 * Create a DependencyInjector for Contacts features: service + facade
 */
export const buildInjector: DependencyInjector = makeInjector([
  { provide : API_KEY,      useValue: '873771d7760b846d51d025ac5804ab' },
  { provide : API_ENDPOINT, useValue: 'https://uifaces.co/api?limit=25' },
  { 
    provide : ContactsService, 
    useClass: ContactsService, 
    deps    : [API_ENDPOINT, API_KEY] 
  }
]);



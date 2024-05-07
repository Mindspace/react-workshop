import React from 'react';
import { cn } from '../utils';
import { Contact } from '@workshop/data-access';

interface ListItemProps {
  person: Contact;
}

const ContactListItem = ({ person }: ListItemProps) => {
  return (
    <a
      href={`/contacts/${person.id}`}
      className={cn(
        'rounded text-gray-600 hover:rounded-md hover:bg-indigo-500 hover:text-white',
        'group flex gap-x-3 p-2 text-sm font-semibold leading-6',
      )}
    >
      <img
        className="ml-4 inline-block aspect-square h-12 w-12 rounded-full bg-cover"
        src={person.photo}
        aria-hidden="true"
        alt={person.name}
      />
      <div className="mt-1 flex flex-1 flex-col">
        <h2 className="text-sm font-medium text-gray-900 ">{person.name}</h2>
        <p className="text-sm font-light text-gray-400 ">{person.position}</p>
      </div>
    </a>
  );
};

export default ContactListItem;

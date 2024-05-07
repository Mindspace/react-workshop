import React, { useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { ContactsList } from './contact-list';
import { useContactsHook } from './contacts.hooks';
import { DependencyInjectionProvider } from '@mindspace/di';
import { buildInjector } from '@workshop/data-access';
const ContactDetailsWithId = React.lazy(() => import('./contact-details'));

export const ContactDashboard = () => {
  const location = useLocation();
  const [people, doSearch] = useContactsHook();

  useEffect(() => {
    doSearch('');
  }, [doSearch, people]);

  return (
    <DependencyInjectionProvider injector={buildInjector}>
    <div>
      <div className="fixed inset-y-0 w-[320px] border-r border-neutral-200">
        <ContactsList people={people} />
      </div>
      <main className="flex min-h-screen flex-col pl-[320px]">
        <Routes location={location} key={location.pathname}>
          <Route index element={<ContactDetailsWithId />} />
          <Route path=":id" element={<ContactDetailsWithId />} />
          <Route path="*" element={<h1>Invalid Route</h1>} />
        </Routes>
      </main>
    </div>
    </DependencyInjectionProvider>
  );
};



// import React, { Component } from 'react';
// import { Contact, ContactsService } from '@workshop/data-access';

// import { ContactsList } from './contact-list';
// import { Route, Routes, Location } from 'react-router-dom';

// interface ContactsState {
//   people: Contact[];
// }

// const ContactDetailsWithId = React.lazy(() => import('./contact-details'));
// export class ContactDashboard extends Component<{location?: Location<unknown> }, ContactsState> {
//   private service = new ContactsService();

//   constructor(props:  { location?: Location<unknown> } ) {
//     super(props);
//     this.state = { people: [] };
//   }

//   componentDidMount() {
//     this.service.getContacts().then((list) => {
//       this.setState({ people: list });
//     });
//   }
//   render() {
//     //lazy load ContactDetails
    

//     return (
//       <div>
//         <div className="fixed inset-y-0 w-[320px] border-r border-neutral-200">
//           <ContactsList people={this.state.people} />
//         </div>

//         <main className="flex min-h-screen flex-col pl-[320px] ">
	
//         <Routes key={this.props.location?.pathname} location={this.props.location}>
//             <Route index element={<ContactDetailsWithId />} />
//             <Route path=":id" element={<ContactDetailsWithId />} />
//             <Route path="*" element={<h1>Invalid Route</h1>} />
//           </Routes>
//         </main>
//       </div>
//     );
//   }
// }

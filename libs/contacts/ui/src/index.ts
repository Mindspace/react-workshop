import { withRouter } from './utils';
import { ContactDashboard, } from './contacts/contact-dashboard';

// Explicitly type the ContactDashboard component with RouteComponentProps
const ContactDashboardWithRouter = withRouter(ContactDashboard);

export default ContactDashboardWithRouter;

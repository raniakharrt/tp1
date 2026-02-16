import Appnavbar from "./navbar1";
import Dashboard from "./Dashboard";
import ContactForm from "./ContactForm";
import DataTable from "./DataTable";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div>
      <Appnavbar />

      <section id="home" className="text-center mt-6 p-10 bg-gray-100">
        <h1 className="text-4xl font-bold">
          Bienvenue sur l'application multi-CSS
        </h1>

        <p className="mt-4 text-lg">
          Une application React utilisant plusieurs frameworks CSS
        </p>
      </section>

      <Dashboard />
      <DataTable />

      <section id="contact" className="mt-10 mb-10">
        <ContactForm />
      </section>
    </div>
  );
}

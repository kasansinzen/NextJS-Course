import { NextPage } from "next";
import Link from "next/link";

const ClientsPage: NextPage = () => {
  const clients = [
    {id: "kasansin", name: "Kasansin"},
    {id: "khamsat", name: "Khamsat"},
  ];

  return <div>
    <h1>The Client Page</h1>
    <ul>
      <li>
        {clients.map(client => <li key={client.id}>
          <Link href={`clients/${client.id}`}>{client.name}</Link>
        </li>)}
      </li>
    </ul>
  </div>
}

export default ClientsPage;
import { Component } from "react";

import { theme } from "../theme/theme";
import { ThemeProvider } from "styled-components";
import { nanoid } from "nanoid";

import { MainTitle } from "./Titles/MainTitle/MainTitle";
import { ContactForm } from "./ContactForm/ContactForm";
import { SecondaryTitle } from "./Titles/SecondaryTitle/SecondaryTitle";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./Filter/ContactList/ContactList";

export interface Contact {
  id: any;
  name: string;
  number: string;
}

type PhonebookState = {
  contacts: Contact[];
  filter: string;
};

export class App extends Component<{}, PhonebookState> {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount(): void {
    const getData: Contact[] = JSON.parse(
      localStorage.getItem("contacts") || "[]"
    );

    if (getData) {
      this.setState({ contacts: getData });
    }
  }

  componentDidUpdate(prevState: PhonebookState): void {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleSubmit = (values: any, { resetForm }: any): void => {
    this.addNewContact(values);
    resetForm();
  };

  addNewContact = (values: Contact): void => {
    const { name, number } = values;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    if (
      this.state.contacts
        .map(({ name }) => name.toLowerCase())
        .includes(name.toLowerCase())
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      this.setState((prevState) => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
  };

  handleFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ filter: e.currentTarget.value });
    this.renderFilterList();
  };

  renderFilterList = (): Contact[] => {
    const { contacts, filter } = this.state;
    let filterArr: Contact[] = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    return filterArr;
  };

  deleteContact = (id: number): void => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { contacts } = this.state;
    const filterList = this.renderFilterList();

    return (
      <ThemeProvider theme={theme}>
        <MainTitle title="Phonebook" />
        <ContactForm getData={this.handleSubmit} />
        <SecondaryTitle title="Contacts" />
        <Filter
          title="Find contacts by name"
          handleFilter={this.handleFilter}
        />
        <ContactList
          filterContacts={filterList}
          contacts={contacts}
          deleteContact={this.deleteContact}
        />
      </ThemeProvider>
    );
  }
}

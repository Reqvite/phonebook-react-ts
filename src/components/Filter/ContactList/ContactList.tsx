import { Contact } from "../../App";
import {
  List,
  Notification,
  ListItem,
  Name,
  DeleteBtn,
} from "./ContactList.style";

interface ContactListProps {
  // filterContacts: () => Contact[];
  contacts: Contact[];
  deleteContact: (id: number) => void;
}

export const ContactList = ({
  filterContacts,
  contacts,
  deleteContact,
}: ContactListProps) => {
  return (
    <List>
      {contacts.length === 0 ? (
        <Notification>You don't have contacts.</Notification>
      ) : filterContacts.length === 0 ? (
        <Notification>
          No contacts were found matching your request.
        </Notification>
      ) : (
        filterContacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            <Name>{name}:</Name>
            <span>{number}</span>
            <DeleteBtn type="button" onClick={() => deleteContact(id)}>
              Delete
            </DeleteBtn>
          </ListItem>
        ))
      )}
    </List>
  );
};

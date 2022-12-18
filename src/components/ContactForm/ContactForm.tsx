import { Formik } from "formik";

import { FormStyled, Label, Input, Button } from "./ContactForm.style";

interface ContactFormProps {
  getData: (
    values: { name: string; number: string },
    { resetForm }: any
  ) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ getData }) => {
  return (
    <Formik initialValues={{ name: "", number: "" }} onSubmit={getData}>
      <FormStyled>
        <Label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor="number">
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormStyled>
    </Formik>
  );
};

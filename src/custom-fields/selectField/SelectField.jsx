import { FormFeedback, FormGroup, Label } from "reactstrap";
import Select from "react-select";
import { ErrorMessage } from "formik";


function SelectField(props){
  const { field, form, label, placeholder, disabled, options } = props;
  const { name, value } = field;
  const selectedOption = options.find((option) => option.value === value);
  const { errors, touched } = form;
  const showErr = errors[name] && touched[name];
  
  const handleSelectOptionChange = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    field.onChange(changeEvent);
  };
  return (
    <FormGroup>
        {label && <Label for={name}>{label}</Label>}
      <Select
        id={name}
        {...field}
        value={selectedOption}
        onChange={handleSelectOptionChange}
        placeholder={placeholder}
        options={options}
        isDisabled={disabled}
        className={showErr ? "is-invalid" : ""}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  )
}

export default SelectField
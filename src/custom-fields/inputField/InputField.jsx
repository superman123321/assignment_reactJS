
import { ErrorMessage } from "formik";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";


function InputField(props) {
  const { field, form, type, label, placeholder, disabled } = props;
  const { name, value, onChange, onBlur } = field;
  const { errors, touched } = form;
  const showErr = errors[name] && touched[name];

 
  return (
    <div>
       <FormGroup>
        {label && <Label for={name}>{label}</Label>}
        <Input
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          invalid={showErr}
        />
        <ErrorMessage name={name} component={FormFeedback} />
      </FormGroup>


    </div>
  )
}

export default InputField
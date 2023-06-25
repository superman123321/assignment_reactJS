
import { ErrorMessage } from "formik";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";
import classNames from "classnames/bind";
import styles from './InputField.module.scss'


const cx = classNames.bind(styles)

function InputField(props) {
  const { field, form, type, label, placeholder, disabled } = props;
  const { name, value, onChange, onBlur } = field;
  const { errors, touched } = form;
  const showErr = errors[name] && touched[name];

 
  return (
    <div>
       <FormGroup>
        {label && <Label for={name}>{label}</Label>} <br />
        
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

            className={cx('input')}
          />
      
        <ErrorMessage name={name} component={FormFeedback} />
      </FormGroup>


    </div>
  )
}

export default InputField
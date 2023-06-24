
import { FormFeedback, FormGroup, Label } from "reactstrap";
import { ErrorMessage } from "formik";

import RandomPhoto from "../../components/randomPhoto/RandonPhoto"

function RandomPhotoField (props){
  const { field, form, label } = props;
  const { name, value, onBlur } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const handleImageUrlChange = (newImageUrl) => {
    form.setFieldValue(name, newImageUrl);
  };
  return (
    <FormGroup>
       <RandomPhoto 
       name={name}
       imageUrl={value}
       onImageUrlChange={handleImageUrlChange}
       onRandomButtonBlur={onBlur}
       
       />

      <ErrorMessage name={name} component={FormFeedback} />
       
       </FormGroup>
  )
}

export default RandomPhotoField
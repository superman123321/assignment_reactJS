import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";

import { PHOTO_CATEGORY_OPTIONS } from "~/constants/global";
import classNames from "classnames/bind";
import styles from "./PhotoForm.module.scss";
import InputField from "~/custom-fields/inputField/InputField";
import SelectField from "~/custom-fields/selectField/SelectField";
import RandomPhotoField from "~/custom-fields/randomPhotoField/RandomPhotoField";
import { Button, FormGroup, Spinner } from "reactstrap";

const cx = classNames.bind(styles);

function PhotoForm(props) {
  const { idAddMode, initialValues, onSubmit } = props;

  const validationSchema = Yup.object({
    title: Yup.string().required("this field is required"),
    categoryId: Yup.number().required("this field is required"),
    photo: Yup.string().required("this field is required"),
  });
  return (
    <div className={cx("photo-form")}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formikProps) => {
          const { isSubmitting } = formikProps;

          return (
            <Form>
              <div className={cx("input-field")}>
                <FastField
                  name="title"
                  component={InputField}
                  label="Title"
                  placeholder="Eg: Note for your photo"
                />
              </div>

              <div className={cx("select-field")}>
                <FastField
                  name="categoryId"
                  component={SelectField}
                  label="Category"
                  placeholder="What's your photo category?"
                  options={PHOTO_CATEGORY_OPTIONS}
                />
              </div>

              <div className={cx("random-field")}>
                <FastField
                  name="photo"
                  component={RandomPhotoField}
                  label="Photo"
                />
              </div>

              <FormGroup>
                <button type="submit" className={cx("btn")}>
                  {isSubmitting ? <Spinner size="sm" /> : ""}
                  {idAddMode ? "Add To Album" : "update Photo"}
                </button>
              </FormGroup>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default PhotoForm;

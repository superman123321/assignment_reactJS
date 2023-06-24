import { FastField, Form, Formik } from "formik";

import {PHOTO_CATEGORY_OPTIONS} from '../../../../constants/global'
import classNames from "classnames/bind";
import styles from './PhotoForm.module.scss'
import InputField from "../../../../custom-fields/inputField/InputField";
import SelectField from "../../../../custom-fields/selectField/SelectField";
import RandomPhotoField from "../../../../custom-fields/randomPhotoField/RandomPhotoField";


const cx = classNames.bind(styles)

function PhotoForm(){

  return (
    <div className={cx('photo-form')} >
         <Formik
         
         
         >
          {(formikProps)=>{



            return (
              <Form>
                <FastField
                name="title"
                component={InputField}
                label="Title"
                placeholder="Eg: Wow nature ..."
              />

                <FastField
                name="categoryId"
                component={SelectField}
                label="Category"
                placeholder="What's your photo category?"
                options={PHOTO_CATEGORY_OPTIONS}
            />  

                <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />



              </Form>
            )
          }}






         </Formik>




        
    </div>
  )
}

export default PhotoForm
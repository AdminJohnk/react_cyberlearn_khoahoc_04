import React, { useRef, useEffect } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux';
import { Editor } from '@tinymce/tinymce-react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { GET_ALL_CATEGORY_SAGA } from '../../../../redux/constants/CyberBugs/CyberBugsConst';

function FormEditProject(props) {

  // Lấy dữ liệu từ formik
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = props;

  // Editor
  const editorRef = useRef(null);
  const log = (event) => {
    if (editorRef.current) {
      setFieldValue('description', editorRef.current.getContent());
    }
  };

  // Lấy dữ liệu từ redux về
  const { arrCategory } = useSelector(state => state.ProjectCategoryReducer);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'SET_SUBMIT_EDIT_PROJECT',
      callBackSubmit: handleSubmit
    })
    dispatch({
      type: GET_ALL_CATEGORY_SAGA,
    })
  }, [])


  return (
    <form className='container-fluid'>
      <div className='row'>
        <div className='col-4'>
          <div className='form-group'>
            <p className='font-weight-bold'>Project id</p>
            <input value={values.id} disabled className='form-control' name='id' />
          </div>
        </div>
        <div className='col-4'>
          <div className='form-group'>
            <p className='font-weight-bold'>Project name</p>
            <input value={values.projectName} className='form-control' name='projectName' onChange={handleChange} />
          </div>
        </div>
        <div className='col-4'>
          <div className='form-group'>
            <p className='font-weight-bold'>Project category</p>
            <select className='form-control' name='categoryId' value={values.categoryId}>
              {
                arrCategory.map((item, index) => {
                  console.log(values.categoryId);
                  return <option key={index} value={item.id}>{item.projectCategoryName}</option>
                })
              }
            </select>
          </div>
        </div>
        <div className='col-12 mt-4'>
          <div className='form-group'>
            <p className='font-weight-bold mb-2'>Description</p>
            <Editor
              name='description'
              onInit={(evt, editor) => editorRef.current = editor}
              value={values.description}
              init={{
                height: 300,
                menubar: false,
                plugins: [
                  'a11ychecker', 'advlist', 'advcode', 'advtable', 'autolink', 'checklist', 'export',
                  'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks',
                  'powerpaste', 'fullscreen', 'formatpainter', 'insertdatetime', 'media', 'table', 'help', 'wordcount'
                ],
                toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
                  'alignleft aligncenter alignright alignjustify | ' +
                  'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
              }}
              onEditorChange={log}
            />
          </div>
        </div>
      </div>
    </form>
  )
}

const EditProjectFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {
    const { projectEdit } = props;
    return {
      id: projectEdit.id,
      projectName: projectEdit.projectName,
      categoryId: projectEdit.categoryId,
      description: projectEdit.description,
    }
  },
  validationSchema: Yup.object().shape({

  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.dispatch({
      type: 'UPDATE_PROJECT_SAGA',
      projectUpdate: values,
    })

  }
})(FormEditProject);

const mapStateToProps = (state) => {
  return {
    projectEdit: state.ProjectReducer.projectEdit,
  }
}


export default connect(mapStateToProps)(EditProjectFormik);


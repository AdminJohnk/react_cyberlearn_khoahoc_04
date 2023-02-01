import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { Editor } from '@tinymce/tinymce-react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { CREATE_PROJECT_SAGA, GET_ALL_CATEGORY_SAGA } from '../../../redux/constants/CyberBugs/CyberBugsConst';


function CreateProject(props) {

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

  // Lấy dữ liệu từ redux về
  const { arrCategory } = useSelector(state => state.ProjectCategoryReducer);

  // Editor
  const editorRef = useRef(null);
  const dispatch = useDispatch();

  const log = (event) => {
    if (editorRef.current) {
      setFieldValue('description', editorRef.current.getContent());


    }
  };

  useEffect(() => {
    dispatch({
      type: GET_ALL_CATEGORY_SAGA,
    });
  }, [])


  return (
    <div className='p-4' style={{width: "77%"}}>
      <h3>Create Project</h3>
      <form className='container' onSubmit={handleSubmit}>
        <div className="form-group">
          <p className='mb-1'>Name</p>
          <input className='form-control' name='projectName' onChange={handleChange} />
        </div>
        <div className="form-group mt-3">
          <p className='mb-1'>Description</p>
          {/* Editor */}
          <Editor
            name='description'
            onInit={(evt, editor) => editorRef.current = editor}
            initialValue=""
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
          {/* <button onClick={log}>Log editor content</button> */}
          {/* End Edittor */}
        </div>
        <div className="form-group mt-4">
          <select className='form-control' name='categoryId' onChange={handleChange}>
            {arrCategory.map((item, index) => {
              return <option key={index} value={item.id}>{item.projectCategoryName}</option>
            })}
          </select>
        </div>
        <button className='btn btn-outline-primary mt-4' type='submit'>Create project</button>
      </form>

    </div>
  )
}

const CreateProjectFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {
    return {
      projectName: '',
      description: '',
      categoryId: props.arrCategory[0]?.id,
    }
  },
  validationSchema: Yup.object().shape({

  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.dispatch({
      type: CREATE_PROJECT_SAGA,
      projectModel: values,
    })
    
  }
})(CreateProject);

const mapStateToProps = state => {
  return {
    arrCategory: state.ProjectCategoryReducer.arrCategory,
  }
}

export default connect(mapStateToProps)(CreateProjectFormik);

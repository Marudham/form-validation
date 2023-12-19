import './App.css';
import {useFormik} from 'formik';
import * as Yup from 'yup';

function App() {
  const formik = useFormik({
        initialValues:{
          username:"",
          email:"",
          password:"",
          gender:"",
          country:""
        },

        validationSchema:Yup.object({
            username:Yup.string()
                              .max(10,"cannot exceed 10 characters")
                              .required("username field cannot be empty"),
            email:Yup.string()
                              .required("email field cannot be empty"),
            password:Yup.string()
                              .max(10,"cannot exceed 10 characters")
                              .min(5,"cannot be less than 5 characters")
                              .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()-=+])/,
                                      "Password must contain at least 1 small letter, 1 capital letter, 1 digit and 1 special character")
                              .required("password field cannot be empty"),
            gender:Yup.string()
                              .required("Select at least 1 option"),
            country:Yup.string()
                              .required("Select at least 1 option")
        }),

        onSubmit:(values) => {
          alert(JSON.stringify(values));
        }
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <lable>USERNAME : </lable>
        <input
              type="text"
              name="username"
              placeholder='Enter username'
              onChange={formik.handleChange}
              // value={formik.values.username}
        /><br></br>
        {formik.errors.username && <p>{formik.errors.username}</p>}
        <br></br>
        <lable>EMAIL : </lable>
        <input
              type="email"
              name="email"
              placeholder='Enter email'
              onChange={formik.handleChange}
              // value={formik.values.email}
        /><br></br>
        {formik.errors.email && <p>{formik.errors.email}</p>}
        <br></br>
        <lable>PASSWORD : </lable>
        <input 
              type="password"
              name="password"
              placeholder='Enter password'
              onChange={formik.handleChange}
              // value={formik.values.password}
        /><br></br>
        {formik.errors.password && <p>{formik.errors.password}</p>}
        <br></br>
        <lable>GENDER : </lable>
        <input 
              type="radio" name="gender"
              onChange={formik.handleChange}
              value="Male"
        />
        <lable>Male</lable>
         <input 
              type="radio" name="gender"
              onChange={formik.handleChange}
              value="Female"
        />
        <lable>Female</lable>
        <br></br>
        {formik.errors.gender && <p>{formik.errors.gender}</p>}
        <br></br>
        <lable>COUNTRY : </lable>
        <select name="country" onChange={formik.handleChange} >
          <option>-none-</option>
          <option>India</option>
          <option>America</option>
          <option>Japan</option>
        </select>
        <br></br>
        {formik.errors.country && <p>{formik.errors.country}</p>}
        <br></br>
        <button>SUBMIT</button>
      </form>
    </div>
  );
}

export default App;

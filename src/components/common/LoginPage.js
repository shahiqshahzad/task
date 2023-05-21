import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../actions/userActions";
import { loginSchema } from "../../schemas/login";

const LoginPage = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const navigate = useNavigate();
  const { loading, error, userInfo } = userLogin;

  const initialValues = {
    email: "",
    password: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        dispatch(login(values.email, values.password));
        navigate("/dashboard");
      },
    });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          {error ? error : ""}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email ? (
              <p className="text-red-500 mt-1">{errors.email}</p>
            ) : null}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.password && errors.password ? (
              <p className="text-red-500 mt-1">{errors.password}</p>
            ) : null}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded focus:outline-none focus:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

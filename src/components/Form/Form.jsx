import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"
import "./styles/Form.css";

const RegisterPage = () => {
  const { register, reset, handleSubmit } = useForm();

  const submit = () => {
    reset({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div className="register-box">
      <h2>Registrate</h2>
      <form onSubmit={handleSubmit(submit)}>
        <div className="register-user-box">
          <input {...register("firstName")} type="text" id="firstname" />
          <label htmlFor="firstname">Nombres</label>
        </div>
        <div className="register-user-box">
          <input {...register("lastName")} type="text" id="lastname" />
          <label htmlFor="lastname">Apellidos</label>
        </div>
        <div className="register-user-box">
          <input {...register("email")} type="email" id="email" />
          <label htmlFor="email">Email</label>
        </div>
        <div className="register-user-box">
          <input {...register("phone")} type="text" id="phone" />
          <label htmlFor="phone">Numero</label>
        </div>
        <Link to={'/'}><button>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Contactame
        </button></Link>
      </form>
    </div>
  );
};

export default RegisterPage;
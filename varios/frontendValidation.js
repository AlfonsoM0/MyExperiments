/* 
Un componente de validación de formularios es una función que recibe un objeto con los datos del formulario y devuelve un objeto con los errores encontrados.
*/

const data = {
  name: '',
  email: '',
  password: '',
};

function validate(data) {
  const errors = {};
  if (!data.name) {
    errors.name = 'El nombre es requerido';
  }
  if (!data.email) {
    errors.email = 'El email es requerido';
  }
  if (!data.password) {
    errors.password = 'La contraseña es requerida';
  }
  return errors;
}
// console.log(validate(data));

//|> Example of a form component

function form() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

    setErrors(validate(data));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (Object.keys(errors).length) {
      alert('Hay errores');
    } else {
      alert('Enviando datos');
      //dispatch(submitForm(data));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Contraseña</label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

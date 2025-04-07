import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

function Page4() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    gender: '',
    phone: '',
    age: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (form) => {
    form.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="signup-form">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className='haha'>
        <div>
          <label>Email: {formData.email}</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder='+250'
          />
          <input
            type="number"
            value={formData.age}
            name='age'
            placeholder='enter your age'
            onChange={handleChange}
          />
        </div>

       
        <Link to="/page1">
          <button type="button">Signup</button>
        </Link>

        <p>Already have an account?</p>

        <Link to="/page2">
          <button type="button">Login</button>
        </Link>
      </form>

      <hr />
      <Outlet />
    </div>
  );
}

export default Page4;

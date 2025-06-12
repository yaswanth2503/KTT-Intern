const { employee } = require('../models');
const bcrypt = require('bcrypt'); // Make sure this is imported

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: 'Please enter both username and password'
    });
  }

  try {
    const user = await employee.findOne({
      where: { Username: username }
    });

    if (!user) {
      return res.status(404).json({
        message: 'Username not found'
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.Password);

    if (!isPasswordMatch) {
      return res.status(401).json({
        message: 'Invalid password'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Login successful',
      result: user
    });

  } catch (err) {
    console.error('Login error:', err); 
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

module.exports = { login };

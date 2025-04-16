const User = require('../models/user');

async function viewUsers() {
  try {
    const users = await User.findAll();

    if (users.length === 0) {
      console.log('No users found.');
      return;
    }

    console.log(` Found ${users.length} users:`);
    users.forEach((user, i) => {
      console.log(`\nUser ${i + 1}:`, user.toJSON());
    });
  } catch (err) {
    console.error('Error fetching users:', err.message);
  } finally {
    process.exit(0);
  }
}

viewUsers();

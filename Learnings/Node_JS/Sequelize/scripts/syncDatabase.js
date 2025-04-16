// const sequelize = require('../models/index');
// const User = require('../models/user');

// async function syncDatabase() {
//   try {
//     // Test connection
//     await sequelize.authenticate();
//     console.log('Connection to database established successfully.');
    
//     // Sync model with database (create table)
//     await sequelize.sync({ force: true });
//     console.log('Database synchronized successfully.');
    
//     // Create multiple users
//     const users = await User.bulkCreate([
//       {
//         firstName: 'John',
//         lastName: 'Doe',
//         email: 'john.doe@example.com'
//       },
//       {
//         firstName: 'Jane',
//         lastName: 'Smith',
//         email: 'jane.smith@example.com'
//       },
//       {
//         firstName: 'Michael',
//         lastName: 'Johnson',
//         email: 'michael.johnson@example.com'
//       },
//       {
//         firstName: 'Emily',
//         lastName: 'Brown',
//         email: 'emily.brown@example.com'
//       },
//       {
//         firstName: 'David',
//         lastName: 'Wilson',
//         email: 'david.wilson@example.com'
//       },
//       {
//         firstName: 'Sarah',
//         lastName: 'Taylor',
//         email: 'sarah.taylor@example.com'
//       },
//       {
//         firstName: 'James',
//         lastName: 'Anderson',
//         email: 'james.anderson@example.com'
//       },
//       {
//         firstName: 'Olivia',
//         lastName: 'Martinez',
//         email: 'olivia.martinez@example.com'
//       },
//       {
//         firstName: 'Robert',
//         lastName: 'Garcia',
//         email: 'robert.garcia@example.com'
//       },
//       {
//         firstName: 'Sophia',
//         lastName: 'Lopez',
//         email: 'sophia.lopez@example.com'
//       }
//     ]);
    
//     console.log(`${users.length} sample users created successfully!`);
    
//     console.log('All operations completed successfully!');
//   } catch (error) {
//     console.error('Error:', error);
//   } finally {
//     await sequelize.close();
//   }
// }

// syncDatabase();




const sequelize = require('../models/index');
const User = require('../models/user');

async function syncDatabase() {
  try {
    await sequelize.authenticate();
    console.log(' Connected to DB');

    await sequelize.sync({ force: true });
    console.log(' Synced & Dropped/Recreated tables');

    const users = await User.bulkCreate([
      { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
      { firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com' },
      { firstName: 'Michael', lastName: 'Johnson', email: 'michael.johnson@example.com' },
      { firstName: 'Emily', lastName: 'Brown', email: 'emily.brown@example.com' },
      { firstName: 'David', lastName: 'Wilson', email: 'david.wilson@example.com' },
      { firstName: 'Sarah', lastName: 'Taylor', email: 'sarah.taylor@example.com' },
      { firstName: 'James', lastName: 'Anderson', email: 'james.anderson@example.com' },
      { firstName: 'Olivia', lastName: 'Martinez', email: 'olivia.martinez@example.com' },
      { firstName: 'Robert', lastName: 'Garcia', email: 'robert.garcia@example.com' },
      { firstName: 'Sophia', lastName: 'Lopez', email: 'sophia.lopez@example.com' }
    ], {
      validate: true,  // <- IMPORTANT
      individualHooks: true
    });

    console.log(` Inserted ${users.length} users.`);
  } catch (error) {
    console.error(' Error inserting users:', error.message);
  } finally {
    await sequelize.close();
  }
}

syncDatabase();

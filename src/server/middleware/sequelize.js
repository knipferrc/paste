import Sequelize from 'sequelize'

export default async () => {
  const Op = Sequelize.Op
  const sequelize = new Sequelize(process.env.RAZZLE_POSTGRES_URL, {
    dialect: 'postgres',
    operatorAliases: Op
  })
  try {
    await sequelize.authenticate()
  } catch (err) {
    console.error(err)
  }
}

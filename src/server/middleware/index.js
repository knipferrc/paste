import compose from 'recompose/compose'
import compression from 'compression'
import helmet from 'helmet'
import sequelize from './sequelize'

export default compose(helmet, compression, sequelize)

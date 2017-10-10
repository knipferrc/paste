import compose from 'recompose/compose'
import compression from 'compression'
import helmet from 'helmet'
import hpp from 'hpp'
import sequelize from './sequelize'

export default compose(helmet, hpp, compression, sequelize)
